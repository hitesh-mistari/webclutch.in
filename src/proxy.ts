import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy function for Next.js 16 multi-tenant routing.
 * This replaces the standard middleware.ts in this specific setup.
 */
export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // Remove port if exists (e.g. localhost:3000 -> localhost)
  const hostname = host.split(":")[0];

  const parts = hostname.split(".");

  // Example logic for subdomain extraction:
  // clinic.doc2graphs.com → ["clinic", "doc2graphs", "com"] -> subdomain = "clinic"
  // doc2graphs.com → ["doc2graphs", "com"] -> subdomain = ""
  // clinic.localhost → ["clinic", "localhost"] -> subdomain = "clinic" (if you want to test locally)

  let subdomain = "";

  if (parts.length > 2) {
    // Production: tenant.domain.com
    subdomain = parts[0];
  } else if (parts.length === 2 && parts[1] === "localhost") {
    // Local: tenant.localhost
    subdomain = parts[0];
  }

  // Skip for main domain or if no subdomain extracted
  if (!subdomain || subdomain === "www") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // Prevent infinite loops and skip internal paths/assets
  if (
    pathname.startsWith(`/${subdomain}`) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Rewrite to the dynamic [subdomain] path
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;

  console.log(`[Proxy] Rewriting ${pathname} to ${url.pathname}`);
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
