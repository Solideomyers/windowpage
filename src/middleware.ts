import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const res: NextResponse = intlMiddleware(req);

  // Check if the response is a 404 Not Found
  if (res.status === 404) {
    // Throw an error to trigger the error boundary
    throw new Error(
      `Page not found: ${req.nextUrl.pathname}.`
    );
  }

  return res;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|favicon.ico|.next|_next|.*\\..*).*)'],
};
