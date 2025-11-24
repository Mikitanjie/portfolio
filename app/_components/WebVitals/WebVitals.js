'use client';

import { useEffect } from 'react';

export default function WebVitals() {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Import web-vitals dynamically with error handling
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        // Log metrics to console (can be replaced with analytics service)
        onCLS(console.log);
        onFID(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
        onINP(console.log);

        // Optional: Send to analytics service
        // Example: Send to Google Analytics
        // function sendToAnalytics(metric) {
        //   if (typeof window !== 'undefined' && window.gtag) {
        //     window.gtag('event', metric.name, {
        //       value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        //       event_category: 'Web Vitals',
        //       event_label: metric.id,
        //       non_interaction: true,
        //     });
        //   }
        // }
        // onCLS(sendToAnalytics);
        // onFID(sendToAnalytics);
        // onFCP(sendToAnalytics);
        // onLCP(sendToAnalytics);
        // onTTFB(sendToAnalytics);
        // onINP(sendToAnalytics);
      } catch (error) {
        // web-vitals not available, silently fail
        if (process.env.NODE_ENV === 'development') {
          console.warn('web-vitals package not found. Performance metrics will not be tracked.');
        }
      }
    };

    loadWebVitals();
  }, []);

  return null;
}

