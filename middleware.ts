import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'th', 'pt', 'es', 'id'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, etc) and static assets
        '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)',
    ],
};
