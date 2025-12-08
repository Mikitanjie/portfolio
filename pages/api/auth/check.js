export default async function handler(req, res) {
  // Check if auth cookie exists
  const authCookie = req.cookies.portfolio_auth;
  
  if (authCookie === 'authenticated') {
    return res.status(200).json({ authenticated: true });
  }
  
  return res.status(401).json({ authenticated: false });
}
