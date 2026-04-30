import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // Remove port if exists (e.g. localhost:3000 -> localhost)
  const hostname = host.split(":")[0];

  const parts = hostname.split(".");

  // Example logic for subdomain extraction:
  // clinic.doc2graphs.com → ["clinic", "doc2graphs", "com"] -> subdomain = "clinic"
  // doc2graphs.com → ["doc2graphs", "com"] -> subdomain = ""
  // clinic.localhost → ["clinic", "localhost"] -> subdomain = "clinic"

  let subdomain = "";

  if (parts.length > 2) {
    // Production: tenant.doc2graphs.com
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

  // Prevent infinite loops and skip internal paths/assets/admin/api
  if (
    pathname.startsWith(`/${subdomain}`) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") 
  ) {
    return NextResponse.next();
  }

  // Rewrite to the dynamic [subdomain] path
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;

  console.log(`[Middleware] Rewriting ${pathname} to ${url.pathname}`);
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
