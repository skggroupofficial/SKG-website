import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteUrl } from "./lib/seo";

const PRODUCTION_HOST = new URL(siteUrl).host;

// Keep preview/staging deployments (e.g. *.vercel.app) out of the index —
// only the production host should ever be crawlable, so canonical/schema
// URLs pointing at the production domain never get indexed from elsewhere.
export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  if (request.headers.get("host") !== PRODUCTION_HOST) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
