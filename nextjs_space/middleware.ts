import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es', 'pl', 'de'];
const defaultLocale = 'en';

// Get the preferred locale from headers
function getLocale(request: NextRequest): string {
  // Check cookie first
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().substring(0, 2));
    for (const lang of languages) {
      if (locales.includes(lang)) {
        return lang;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Extract locale and set cookie
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale, { path: '/', sameSite: 'lax' });
    return response;
  }
  
  // Skip API routes and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }
  
  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', sameSite: 'lax' });
  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
