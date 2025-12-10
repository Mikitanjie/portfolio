export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check if auth cookie exists and has the correct value
  const authCookie = req.cookies.portfolio_auth;
  
  // Strict check - cookie must be exactly 'authenticated'
  if (authCookie === 'authenticated') {
    return res.status(200).json({ authenticated: true });
  }
  
  // Return 200 with authenticated: false to prevent console errors
  // This is a status check endpoint, not an authentication-required endpoint
  return res.status(200).json({ authenticated: false });
}
