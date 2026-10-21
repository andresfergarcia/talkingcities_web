import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es', 'pl', 'de'];
const defaultLocale = 'en';

// Get the preferred locale from headers or cookies
function getLocale(request: NextRequest): string {
  // Check cookie first
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2).toLowerCase());
    for (const lang of languages) {
      if (locales.includes(lang)) {
        return lang;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    
    // Check if pathname already has a supported locale
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    
    if (pathnameHasLocale) {
      return NextResponse.next();
    }
    
    // Redirect to locale-prefixed path
    const locale = getLocale(request);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
    
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Middleware execution error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Match all paths except internal Next.js/Vercel paths and files with extensions
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
