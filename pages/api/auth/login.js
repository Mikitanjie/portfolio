// Simple rate limiting for login attempts
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_ATTEMPTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const attempts = rateLimitMap.get(ip) || [];
  const recentAttempts = attempts.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return false;
  }
  
  recentAttempts.push(now);
  rateLimitMap.set(ip, recentAttempts);
  return true;
}

function createAuthCookie() {
  // Create a secure, HTTP-only cookie
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  const isProduction = process.env.NODE_ENV === 'production';
  
  return `portfolio_auth=authenticated; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Strict${isProduction ? '; Secure' : ''}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Rate limiting
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        message: 'Too many attempts. Please try again later.' 
      });
    }

    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Server-side password check - NOT exposed to client!
    const correctPassword = process.env.PORTFOLIO_PASSWORD; // NO NEXT_PUBLIC_ prefix!

    if (!correctPassword) {
      console.error('PORTFOLIO_PASSWORD environment variable is not set');
      return res.status(500).json({ 
        message: 'Server configuration error. Please contact the administrator.' 
      });
    }

    if (password === correctPassword) {
      // Set secure HTTP-only cookie
      res.setHeader('Set-Cookie', createAuthCookie());
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      message: 'An error occurred. Please try again.' 
    });
  }
}
