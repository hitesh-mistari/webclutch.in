import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // remove port if exists
  const hostname = host.split(":")[0];

  const parts = hostname.split(".");

  // Example:
  // clinic.doc2graphs.com → ["clinic", "doc2graphs", "com"]
  // doc2graphs.com → ["doc2graphs", "com"]

  let subdomain = "";

  if (parts.length > 2) {
    subdomain = parts[0];
  }

  // Skip for main domain
  if (!subdomain) {
    return NextResponse.next();
  }

  // Prevent infinite loops and skip for public/admin/api routes
  if (
    req.nextUrl.pathname.startsWith(`/${subdomain}`) ||
    req.nextUrl.pathname.startsWith("/api") ||
    req.nextUrl.pathname.startsWith("/admin")
  ) {
    return NextResponse.next();
  }

  // OPTIONAL: route based on subdomain
  const url = req.nextUrl.clone();

  url.pathname = `/${subdomain}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
