import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "he"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip redirects for public files like /logo.png, /robots.txt, /sitemap.xml, etc.
  // Without this, locale redirects can break direct asset loads (e.g. /logo.png -> /en/logo.png).
  const lastSegment = pathname.split("/").pop() ?? "";
  const isPublicFile = lastSegment.includes(".");
  if (isPublicFile) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If root path, redirect to default locale
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // If pathname doesn't have a locale, redirect to default locale
  if (!pathnameHasLocale && !pathname.startsWith("/api") && !pathname.startsWith("/_next")) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};