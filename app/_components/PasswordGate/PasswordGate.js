'use client'

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useRouter } from 'next/navigation';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  useContext(ThemeContext); // Ensure theme context is available for dark mode styling

  // Generate and play a "wrong" error sound
  const playWrongSound = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      const now = audioContext.currentTime;
      const duration = 0.3;
      
      // Create a harsh, buzzer-like "wrong" sound
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      const gain2 = audioContext.createGain();
      
      // Two dissonant frequencies for "wrong" sound
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(200, now);
      osc1.frequency.exponentialRampToValueAtTime(150, now + duration);
      
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(250, now);
      osc2.frequency.exponentialRampToValueAtTime(200, now + duration);
      
      // Quick attack, sustain, then fade
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gain1.gain.setValueAtTime(0.3, now + 0.15);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + duration);
      
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gain2.gain.setValueAtTime(0.2, now + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + duration);
      
      osc1.connect(gain1);
      osc2.connect(gain2);
      gain1.connect(audioContext.destination);
      gain2.connect(audioContext.destination);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
      
      osc1.onended = () => {
        audioContext.close().catch(() => {});
      };
    } catch (error) {
      // Silently fail
    }
  };

  // Generate and play a pleasant "plinnn" success sound
  const playSuccessSound = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      const now = audioContext.currentTime;
      const duration = 0.6;
      
      // Create a pleasant chime/plink sound with multiple harmonics
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const osc3 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      const gain2 = audioContext.createGain();
      const gain3 = audioContext.createGain();
      
      // Main tone - pleasant frequency
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5 note
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.3); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + duration); // G5
      
      // Harmonic 1
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1046.5, now); // C6
      osc2.frequency.exponentialRampToValueAtTime(1318.5, now + 0.3); // E6
      osc2.frequency.exponentialRampToValueAtTime(1567.98, now + duration); // G6
      
      // Harmonic 2 (higher)
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(1567.98, now); // G6
      osc3.frequency.exponentialRampToValueAtTime(1975.5, now + 0.3); // B6
      osc3.frequency.exponentialRampToValueAtTime(2349.3, now + duration); // D7
      
      // Envelope for main tone - quick attack, long sustain, slow fade
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.4, now + 0.05);
      gain1.gain.setValueAtTime(0.4, now + 0.4);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + duration);
      
      // Envelope for harmonic 1 - slightly delayed
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gain2.gain.setValueAtTime(0.2, now + 0.4);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + duration);
      
      // Envelope for harmonic 2 - even more delayed
      gain3.gain.setValueAtTime(0, now);
      gain3.gain.linearRampToValueAtTime(0.15, now + 0.15);
      gain3.gain.setValueAtTime(0.15, now + 0.4);
      gain3.gain.exponentialRampToValueAtTime(0.01, now + duration);
      
      osc1.connect(gain1);
      osc2.connect(gain2);
      osc3.connect(gain3);
      gain1.connect(audioContext.destination);
      gain2.connect(audioContext.destination);
      gain3.connect(audioContext.destination);
      
      osc1.start(now);
      osc2.start(now);
      osc3.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
      osc3.stop(now + duration);
      
      osc1.onended = () => {
        audioContext.close().catch(() => {});
      };
    } catch (error) {
      // Silently fail
    }
  };

  useEffect(() => {
    // Check authentication via server API
    fetch('/api/auth/check', {
      credentials: 'include', // Important: include cookies
    })
      .then(async res => {
        // Parse JSON response
        if (res.ok) {
          try {
            const data = await res.json();
            if (data.authenticated) {
              setIsAuthenticated(true);
            }
          } catch (e) {
            // Silently handle JSON parse errors
          }
        }
        setIsLoading(false);
      })
      .catch(() => {
        // Network errors are handled silently - this prevents console errors
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important: include cookies
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Play success sound
        playSuccessSound();
        setIsAuthenticated(true);
        // Refresh to ensure cookie is set
        router.refresh();
      } else {
        setError(data.message || 'Incorrect password. Please try again.');
        setPassword('');
        // Play wrong sound for incorrect password
        playWrongSound();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setPassword('');
      // Play wrong sound for error
      playWrongSound();
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
                Authorized humans only 🛡️ Bots & wannabe hackers will be emotionally damaged 😂
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
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                    placeholder="Enter password"
                    autoFocus
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <HiEyeOff className="w-5 h-5" />
                    ) : (
                      <HiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
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
