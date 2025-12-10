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
  
  // Return 401 for unauthenticated requests
  return res.status(401).json({ authenticated: false });
}
