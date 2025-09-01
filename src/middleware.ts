import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Check if the request is for the private route
  if (request.nextUrl.pathname.startsWith('/private')) {
    // Check authentication
    if (!isAuthenticated()) {
      // Redirect to home page if not authenticated
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/private/:path*'],
};
