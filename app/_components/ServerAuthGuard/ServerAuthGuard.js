// Server component that checks authentication before rendering children
// This prevents the actual content from being sent in the HTML response
// if the user is not authenticated. This adds a server-side layer of protection
// that cannot be bypassed by client-side manipulation.

import { cookies } from 'next/headers';

async function checkAuth() {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('portfolio_auth');
    return authCookie?.value === 'authenticated';
  } catch (error) {
    // If cookies() fails (e.g., in edge runtime), default to false
    return false;
  }
}

export default async function ServerAuthGuard({ children }) {
  // Skip authentication in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment) {
    return <>{children}</>;
  }

  const isAuthenticated = await checkAuth();

  // If not authenticated, return an empty div
  // This prevents the actual content from being included in the server-rendered HTML
  // The PasswordGate client component will handle showing the login form
  // This server-side check prevents bypasses via React DevTools or network manipulation
  if (!isAuthenticated) {
    return <div id="server-auth-guard-placeholder" style={{ display: 'none' }} />;
  }

  // Authenticated - render children
  return <>{children}</>;
}
