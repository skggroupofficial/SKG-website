"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Textarea, Select, Checkbox } from "@/components/ds";
import { ArrowRight } from "@/components/site/icons";

const schema = z.object({
  name: z.string().min(1, "Please tell us your name."),
  email: z.string().min(1, "Please enter your email.").email("Please enter a valid email."),
  phone: z.string().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree before we can reply." }),
  }),
  // Honeypot — must stay empty.
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const ENQUIRY_TYPES = ["Land / JV", "Investment", "Hospitality", "Press", "Careers"];

export function EnquiryForm() {
  const [sent, setSent] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", type: "", message: "", company: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setSent(true);
        return;
      }
      setServerError(data.error || "Something went wrong. Please try again, or email us directly.");
    } catch {
      setServerError("We couldn't reach the server. Please try again, or email us directly.");
    }
  };

  const sendAnother = () => {
    reset();
    setServerError(null);
    setSent(false);
  };

  return (
    <div
      style={{
        background: "var(--bone-100)",
        border: "1px solid var(--border-subtle)",
        padding: "clamp(1.8rem, 3vw, 2.6rem)",
        borderRadius: "var(--radius-card)",
      }}
    >
      {sent ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            padding: "2rem 0",
          }}
        >
          <span style={{ fontSize: "2rem", color: "var(--accent)", lineHeight: 1 }} aria-hidden="true">
            ✦
          </span>
          <h3 className="skg-display" style={{ fontSize: "1.8rem", margin: 0 }}>
            Thank you.
          </h3>
          <p className="skg-body" style={{ maxWidth: "40ch", margin: 0 }}>
            Your enquiry has reached the SKG partnership office. We reply to every serious approach
            within two working days.
          </p>
          <Button variant="secondary" onClick={sendAnother}>
            Send another
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
        >
          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.3rem" }}>
            <Input
              label="Full name"
              placeholder="Your name"
              required
              autoComplete="name"
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@company.com"
              required
              autoComplete="email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.3rem" }}>
            <Input
              label="Phone"
              placeholder="+91 …"
              autoComplete="tel"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Select
              label="Enquiry type"
              placeholder="Choose one"
              options={ENQUIRY_TYPES}
              {...register("type")}
              error={errors.type?.message}
            />
          </div>

          <Textarea
            label="About the site or opportunity"
            rows={4}
            placeholder="Location, size, current use, and what you have in mind…"
            {...register("message")}
            error={errors.message?.message}
          />

          <Checkbox
            label="I agree to be contacted about this enquiry."
            required
            {...register("consent")}
          />
          {errors.consent?.message && (
            <span className="skg-field__error" style={{ marginTop: "-0.7rem" }}>
              {errors.consent.message}
            </span>
          )}

          {/* Honeypot — must stay empty; hidden from humans and assistive tech. */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            {...register("company")}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          />

          {serverError && (
            <p className="skg-field__error" role="alert" style={{ margin: 0 }}>
              {serverError}
            </p>
          )}

          <div>
            <Button
              type="submit"
              variant="accent"
              disabled={isSubmitting}
              iconRight={<ArrowRight size={15} weight="bold" />}
            >
              {isSubmitting ? "Sending…" : "Send enquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
