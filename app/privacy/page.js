'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '../_components/ThemeContext/ThemeContext';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Privacy Policy - Michael Catania Portfolio";
  }, []);

  const titleStyle = {
    color: theme === 'light' ? 'rgb(0, 100, 0)' : 'rgb(1, 161, 35)',
    animation: theme === 'dark' ? 'lightingEffect 2s linear infinite' : undefined,
    filter: theme === 'dark' ? 'drop-shadow(0 0 20px green)' : undefined,
  };

  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const linkColor = theme === 'light' ? 'text-blue-600' : 'text-emerald-400';

  return (
    <div className={`min-h-screen w-full flex flex-col items-center px-4 py-16 ${textColor}`}>
      <div className="max-w-4xl w-full">
        <Link 
          href="/" 
          className={`inline-block mb-8 ${linkColor} hover:underline transition-colors`}
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8" style={titleStyle}>
          Privacy Policy
        </h1>

        <div className="space-y-6 text-base leading-relaxed">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              1. Introduction
            </h2>
            <p>
              Welcome to Michael Catania&apos;s portfolio website. This Privacy Policy explains how I collect, 
              use, and protect your personal information when you visit this website or use the contact form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              2. Information I Collect
            </h2>
            <p className="mb-3">
              <strong>Contact Form Data:</strong> When you use the contact form, I collect the following information:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
            <p className="mt-3">
              <strong>Theme Preference:</strong> This website stores your theme preference (light/dark mode) 
              in your browser&apos;s local storage. This data is stored locally on your device and is not transmitted 
              to any server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              3. How I Use Your Information
            </h2>
            <p className="mb-3">I use the information collected through the contact form to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Respond to your inquiries and messages</li>
              <li>Communicate with you regarding your questions or requests</li>
              <li>Improve my services and website experience</li>
            </ul>
            <p className="mt-3">
              I do not use your information for marketing purposes, and I do not share, sell, or rent your 
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              4. Data Storage and Security
            </h2>
            <p>
              Contact form submissions are sent via email using a secure email service (Resend). 
              Your information is stored in my email inbox and is protected by standard email security measures. 
              I take reasonable precautions to protect your personal information, but no method of transmission 
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              5. Cookies and Tracking
            </h2>
            <p>
              This website does not use cookies or any tracking technologies. The only data stored locally 
              is your theme preference in your browser&apos;s local storage, which is not transmitted to any server 
              and can be cleared at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              6. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Request access to the personal information I hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact me using the contact form on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              7. Third-Party Services
            </h2>
            <p>
              This website uses the following third-party services:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li><strong>Resend:</strong> For sending contact form emails (privacy policy: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkColor + ' hover:underline'}>resend.com/legal/privacy-policy</a>)</li>
              <li><strong>Vercel:</strong> For hosting this website (privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkColor + ' hover:underline'}>vercel.com/legal/privacy-policy</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              8. Children&apos;s Privacy
            </h2>
            <p>
              This website is not intended for children under the age of 13. I do not knowingly collect 
              personal information from children under 13. If you believe I have collected information 
              from a child under 13, please contact me immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              9. Changes to This Privacy Policy
            </h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated &quot;Last updated&quot; date. I encourage you to review this Privacy Policy periodically 
              to stay informed about how I protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={titleStyle}>
              10. Contact Me
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or my data practices, 
              please contact me using the contact form on this website or through the following:
            </p>
            <ul className="list-none ml-4 space-y-2 mt-3">
              <li>Email: Use the contact form on the homepage</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/mc16/" target="_blank" rel="noopener noreferrer" className={linkColor + ' hover:underline'}>linkedin.com/in/mc16/</a></li>
              <li>GitHub: <a href="https://github.com/Mikitanjie" target="_blank" rel="noopener noreferrer" className={linkColor + ' hover:underline'}>github.com/Mikitanjie</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <Link 
            href="/" 
            className={`inline-block ${linkColor} hover:underline transition-colors`}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

