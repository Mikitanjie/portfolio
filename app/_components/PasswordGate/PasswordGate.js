'use client'

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const STORAGE_KEY = 'portfolio_authenticated';
const PASSWORD_KEY = 'portfolio_auth_token';

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useContext(ThemeContext); // Ensure theme context is available for dark mode styling

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthFlagSet = localStorage.getItem(STORAGE_KEY) === 'true';
    const authToken = localStorage.getItem(PASSWORD_KEY);
    // Note: For client-side access, env var must be prefixed with NEXT_PUBLIC_
    const correctPassword = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD;
    
    // Verify both the authentication flag and that the stored password still matches
    // This ensures authentication persists but also validates if password changed
    if (isAuthFlagSet && authToken && correctPassword && authToken === correctPassword) {
      setIsAuthenticated(true);
    } else if (isAuthFlagSet && (!authToken || !correctPassword || authToken !== correctPassword)) {
      // Clear invalid authentication state if password changed or env var missing
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(PASSWORD_KEY);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Note: For client-side access, env var must be prefixed with NEXT_PUBLIC_
    const correctPassword = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD;
    
    if (!correctPassword) {
      setError('Password protection is not configured. Please contact the site administrator.');
      return;
    }

    if (password === correctPassword) {
      localStorage.setItem(PASSWORD_KEY, password);
      localStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Portfolio Protected
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Please enter the password to access this site
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  placeholder="Enter password"
                  autoFocus
                  autoComplete="current-password"
                />
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
              >
                Access Portfolio
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
