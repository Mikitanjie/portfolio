import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow access to auth API routes (login, check) - these need to be accessible
  if (pathname.startsWith('/api/auth/')) {
    return NextResponse.next();
  }

  // Allow access to public assets (images, fonts, static files, etc.)
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/manifest.json') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|pdf)$/)
  ) {
    return NextResponse.next();
  }

  // Check authentication cookie
  const authCookie = request.cookies.get('portfolio_auth');

  // If no auth cookie or cookie is not 'authenticated', block access
  if (!authCookie || authCookie.value !== 'authenticated') {
    // For API routes (except auth), return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { message: 'Unauthorized. Please authenticate first.' },
        { status: 401 }
      );
    }

    // For page routes, set a header to indicate authentication is required
    // The PasswordGate component will handle showing the login UI
    // But we still allow the request through so the login form can be rendered
    // This is a balance between security and UX - the actual content is still
    // protected by the PasswordGate component, but we add an extra layer here
    const response = NextResponse.next();
    response.headers.set('X-Auth-Required', 'true');
    return response;
  }

  // Authenticated - allow access and set header
  const response = NextResponse.next();
  response.headers.set('X-Auth-Status', 'authenticated');
  return response;
}

// Configure which routes this middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
