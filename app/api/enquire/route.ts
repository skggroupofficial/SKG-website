import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().default(""),
  type: z.string().max(60).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  consent: z.boolean(),
  company: z.string().optional().default(""),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot: a bot filled the hidden "company" field. Accept silently.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  if (!data.consent) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const text = [
    "New enquiry from the SKG website.",
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Phone:   ${data.phone || "—"}`,
    `Type:    ${data.type || "—"}`,
    "",
    "Message:",
    data.message || "—",
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (key) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(key);
      await resend.emails.send({
        from: process.env.ENQUIRY_FROM || "SKG Website <onboarding@resend.dev>",
        to: process.env.ENQUIRY_TO || "contact@skggroup.com",
        replyTo: data.email,
        subject: "Enquiry — " + data.name,
        text,
      });
    } catch (err) {
      console.error("[SKG enquiry] send failed", err);
      return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
    }
  } else {
    console.log("[SKG enquiry]", data);
  }

  return NextResponse.json({ ok: true });
}
