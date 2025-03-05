import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);
const NOT_FOUND_STATUS = 404;

export default function middleware(req: NextRequest) {
  const res: NextResponse = intlMiddleware(req);

  // Check if the response is a 404 Not Found
  if (res.status === NOT_FOUND_STATUS) {
    // Throw an error to trigger the error boundary
    throw new Error(`Page not found: ${req.nextUrl.pathname}.`);
  }

  return res;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|pt|es):path*',
    '/((?!api|favicon.ico|.next|_next|.*\\..*).*)',
  ],
};
