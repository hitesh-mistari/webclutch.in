import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Skip internal paths and static files
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/images') ||
    url.pathname.startsWith('/fonts') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Parse subdomain
  let subdomain = '';
  const hostParts = host.split(':'); // Remove port if present
  const domainParts = hostParts[0].split('.');

  // Root domain examples: doc2graphs.com, localhost
  // Subdomain examples: dentist.doc2graphs.com, dentist.localhost
  if (domainParts.length > 1) {
    if (domainParts[domainParts.length - 1] === 'localhost') {
      // Local testing: e.g. tenant.localhost
      if (domainParts.length > 1 && domainParts[0] !== 'localhost') {
        subdomain = domainParts[0];
      }
    } else {
      // Production: e.g. tenant.doc2graphs.com
      // We assume if length is 3 or more (e.g. dentist.doc2graphs.com), 
      // first part is the subdomain. If length is 2 (e.g. doc2graphs.com), it's root.
      if (domainParts.length >= 3 && domainParts[0] !== 'www') {
        subdomain = domainParts[0];
      }
    }
  }

  // If path is API or Admin, do NOT rewrite to /[site]
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/admin')) {
    console.log(`[Proxy] Passing through API/Admin - Path: ${url.pathname}, Host: ${host}`);
    return NextResponse.next();
  }

  console.log(`[Proxy] Path: ${url.pathname}, Host: ${host}, Subdomain: ${subdomain}`);

  if (subdomain) {
    // Rewrite subdomain requests to `/[site]` internally
    url.pathname = `/${subdomain}${url.pathname}`;
    console.log(`[Proxy] Rewriting to: ${url.pathname}`);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
