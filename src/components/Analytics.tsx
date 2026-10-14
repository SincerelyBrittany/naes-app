// Analytics.tsx — loads GA4 when VITE_GA_MEASUREMENT_ID is set
import React, { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../lib/analytics';

const Analytics: React.FC = () => {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    // gtag.js only processes the real `arguments` object, not a spread array.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default Analytics;
