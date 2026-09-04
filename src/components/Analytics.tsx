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
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
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
