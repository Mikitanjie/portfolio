/**
 * Security Test Script for Password Protection
 * 
 * This script tests various bypass attempts to assess the security
 * of the password protection system.
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

// Test cases for various bypass attempts
const tests = [
  {
    name: '1. Direct API Access Without Auth Cookie',
    test: async () => {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Test message' })
      });
      return response.status === 401; // Should be blocked
    }
  },
  {
    name: '2. Attempt to Set Auth Cookie via JavaScript',
    test: async () => {
      // This should fail because cookie is HttpOnly
      // But we can test if the endpoint accepts it
      const response = await fetch(`${BASE_URL}/api/auth/check`, {
        method: 'GET',
        headers: {
          'Cookie': 'portfolio_auth=authenticated'
        }
      });
      const data = await response.json();
      // If this works, it's a vulnerability
      return !data.authenticated; // Should be false (cookie not set properly)
    }
  },
  {
    name: '3. Check if Auth Check Endpoint is Accessible',
    test: async () => {
      const response = await fetch(`${BASE_URL}/api/auth/check`, {
        method: 'GET'
      });
      return response.ok && response.status === 200; // Should be accessible
    }
  },
  {
    name: '4. Test Rate Limiting on Login',
    test: async () => {
      const attempts = [];
      for (let i = 0; i < 6; i++) {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: 'wrongpassword' })
        });
        attempts.push(response.status);
      }
      // Should see 429 (Too Many Requests) after 5 attempts
      return attempts.filter(s => s === 429).length > 0;
    }
  },
  {
    name: '5. Test Login with Empty Password',
    test: async () => {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: '' })
      });
      return response.status === 400; // Should reject empty password
    }
  },
  {
    name: '6. Test Login with Non-String Password',
    test: async () => {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: 12345 })
      });
      return response.status === 400; // Should reject non-string
    }
  },
  {
    name: '7. Test Access to Static Assets Without Auth',
    test: async () => {
      const response = await fetch(`${BASE_URL}/favicon.ico`);
      return response.ok; // Should be accessible
    }
  },
  {
    name: '8. Test Access to Auth API Routes Without Cookie',
    test: async () => {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: 'test' })
      });
      // Should be accessible (not blocked by middleware)
      return response.status !== 401;
    }
  }
];

async function runTests() {
  console.log('🔒 Security Vulnerability Assessment\n');
  console.log('=' .repeat(60));
  
  const results = [];
  
  for (const test of tests) {
    try {
      const passed = await test.test();
      results.push({ ...test, passed, error: null });
      const status = passed ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} - ${test.name}`);
    } catch (error) {
      results.push({ ...test, passed: false, error: error.message });
      console.log(`❌ ERROR - ${test.name}`);
      console.log(`   Error: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Summary:');
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed && !r.error).length;
  const errors = results.filter(r => r.error).length;
  
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⚠️  Errors: ${errors}`);
  
  // Identify vulnerabilities
  console.log('\n🔍 Vulnerability Analysis:\n');
  
  const vulnerabilities = [];
  
  // Check for timing attack vulnerability
  vulnerabilities.push({
    severity: 'LOW',
    issue: 'Password comparison uses simple === which is vulnerable to timing attacks',
    location: 'pages/api/auth/login.js:74',
    recommendation: 'Use crypto.timingSafeEqual() for constant-time comparison'
  });
  
  // Check for in-memory rate limiting
  vulnerabilities.push({
    severity: 'MEDIUM',
    issue: 'Rate limiting uses in-memory Map - resets on server restart and can be bypassed with IP rotation',
    location: 'pages/api/auth/login.js:1-18',
    recommendation: 'Use Redis or persistent storage for rate limiting in production'
  });
  
  // Check cookie security
  const cookieSecure = process.env.NODE_ENV === 'production';
  if (!cookieSecure) {
    vulnerabilities.push({
      severity: 'LOW',
      issue: 'Secure flag only set in production - cookie can be intercepted in development',
      location: 'pages/api/auth/login.js:25',
      recommendation: 'Always use HTTPS in production'
    });
  }
  
  // Check for no token expiration/refresh
  vulnerabilities.push({
    severity: 'LOW',
    issue: 'Auth cookie lasts 7 days with no refresh mechanism - long-lived sessions',
    location: 'pages/api/auth/login.js:22',
    recommendation: 'Consider shorter sessions or refresh tokens'
  });
  
  // Check middleware behavior
  vulnerabilities.push({
    severity: 'INFO',
    issue: 'Middleware allows page routes through without auth (relies on ServerAuthGuard)',
    location: 'middleware.js:40-42',
    recommendation: 'This is acceptable as ServerAuthGuard prevents content rendering'
  });
  
  vulnerabilities.forEach(vuln => {
    console.log(`[${vuln.severity}] ${vuln.issue}`);
    console.log(`   Location: ${vuln.location}`);
    console.log(`   Recommendation: ${vuln.recommendation}\n`);
  });
  
  console.log('\n💡 Overall Security Assessment:');
  console.log('The password protection has multiple layers:');
  console.log('  1. Client-side PasswordGate (UX layer)');
  console.log('  2. Server-side ServerAuthGuard (prevents content in HTML)');
  console.log('  3. Middleware (blocks API routes)');
  console.log('  4. HttpOnly cookies (prevents XSS cookie theft)');
  console.log('  5. Rate limiting (prevents brute force)');
  console.log('\n⚠️  Main Bypass Risks:');
  console.log('  - Cookie manipulation (if HttpOnly is bypassed)');
  console.log('  - Timing attacks on password comparison');
  console.log('  - Rate limit bypass via IP rotation');
  console.log('  - Long-lived sessions (7 days)');
  
  return results;
}

// Run if executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests, tests };
