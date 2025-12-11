// Rate limiting for login attempts
// Note: In-memory rate limiting resets on server restart
// For production with multiple instances, consider using Redis
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_ATTEMPTS = 5;

// Track failed attempts per IP for additional security
const failedAttemptsMap = new Map();
const FAILED_ATTEMPT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_FAILED_ATTEMPTS = 10; // Block after 10 failed attempts in 15 minutes

function getClientIp(req) {
  // Get real IP address, handling proxies and load balancers
  const forwarded = req.headers['x-forwarded-for'];
  const realIp = req.headers['x-real-ip'];
  const remoteAddress = req.socket?.remoteAddress;
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp.trim();
  }
  return remoteAddress || 'unknown';
}

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

function checkFailedAttempts(ip) {
  const now = Date.now();
  const attempts = failedAttemptsMap.get(ip) || [];
  const recentAttempts = attempts.filter(timestamp => now - timestamp < FAILED_ATTEMPT_WINDOW);
  
  if (recentAttempts.length >= MAX_FAILED_ATTEMPTS) {
    return false; // Too many failed attempts
  }
  
  return true;
}

function recordFailedAttempt(ip) {
  const now = Date.now();
  const attempts = failedAttemptsMap.get(ip) || [];
  attempts.push(now);
  // Keep only recent attempts
  const recentAttempts = attempts.filter(timestamp => now - timestamp < FAILED_ATTEMPT_WINDOW);
  failedAttemptsMap.set(ip, recentAttempts);
}

function createAuthCookie() {
  // Create a secure, HTTP-only cookie
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  const isProduction = process.env.NODE_ENV === 'production';
  
  return `portfolio_auth=authenticated; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Strict${isProduction ? '; Secure' : ''}`;
}

/**
 * Constant-time password comparison to prevent timing attacks
 * Uses crypto.timingSafeEqual() which always takes the same amount of time
 * regardless of where the strings differ
 */
function constantTimeCompare(a, b) {
  const crypto = require('crypto');
  
  // If either is null/undefined, return false
  if (!a || !b) {
    return false;
  }
  
  // Convert to strings and trim
  const strA = String(a).trim();
  const strB = String(b).trim();
  
  // Convert to buffers first to get actual byte lengths
  const bufferA = Buffer.from(strA, 'utf8');
  const bufferB = Buffer.from(strB, 'utf8');
  
  // If byte lengths differ, they can't be equal
  // But we still need to do a comparison to prevent timing leaks
  if (bufferA.length !== bufferB.length) {
    // Create new buffers of the same length (use the longer length)
    // and pad the shorter one to prevent timing attacks
    const maxLength = Math.max(bufferA.length, bufferB.length);
    const paddedA = Buffer.allocUnsafe(maxLength);
    const paddedB = Buffer.allocUnsafe(maxLength);
    
    // Copy original buffers and zero-pad
    paddedA.fill(0);
    paddedB.fill(0);
    bufferA.copy(paddedA, 0);
    bufferB.copy(paddedB, 0);
    
    // Do the comparison to maintain constant time
    // This will always return false (due to padding), but takes constant time
    try {
      crypto.timingSafeEqual(paddedA, paddedB);
    } catch (e) {
      // Shouldn't happen since buffers are same length, but handle gracefully
    }
    return false;
  }
  
  // Byte lengths are equal - use constant-time comparison
  try {
    return crypto.timingSafeEqual(bufferA, bufferB);
  } catch (error) {
    // Shouldn't happen if lengths are equal, but return false to be safe
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get client IP with improved detection
    const clientIp = getClientIp(req);
    
    // Check rate limiting (requests per minute)
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        message: 'Too many attempts. Please try again later.' 
      });
    }
    
    // Check for too many failed attempts (additional security layer)
    if (!checkFailedAttempts(clientIp)) {
      return res.status(429).json({ 
        message: 'Too many failed attempts. Please try again later.' 
      });
    }

    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Server-side password check - NOT exposed to client!
    // Trim whitespace to handle common .env file issues
    const correctPassword = process.env.PORTFOLIO_PASSWORD?.trim(); // NO NEXT_PUBLIC_ prefix!
    const trimmedPassword = password?.trim();

    // Minimal logging - only log errors or missing config
    if (!correctPassword) {
      console.error('⚠️  PORTFOLIO_PASSWORD is not set in .env file!');
      console.error('   Make sure you have PORTFOLIO_PASSWORD=yourpassword in your .env or .env.local file');
      console.error('   Then restart your dev server with: npm run dev');
    }

    if (!correctPassword) {
      console.error('PORTFOLIO_PASSWORD environment variable is not set');
      return res.status(500).json({ 
        message: 'Server configuration error. Please contact the administrator.' 
      });
    }

    // Use constant-time comparison to prevent timing attacks
    const isValid = constantTimeCompare(trimmedPassword, correctPassword);
    
    if (isValid) {
      // Clear failed attempts on successful login
      failedAttemptsMap.delete(clientIp);
      
      // Set secure HTTP-only cookie
      res.setHeader('Set-Cookie', createAuthCookie());
      return res.status(200).json({ success: true });
    } else {
      // Record failed attempt
      recordFailedAttempt(clientIp);
      
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      message: 'An error occurred. Please try again.' 
    });
  }
}
