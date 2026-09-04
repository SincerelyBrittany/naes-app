/** Lightweight GA4 helpers. No-ops until VITE_GA_MEASUREMENT_ID is set. */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID && typeof window !== 'undefined');
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!isAnalyticsEnabled() || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export function trackBuyClick(store: 'amazon' | 'barnes_noble'): void {
  trackEvent('buy_click', {
    store,
    book: 'Finicky Felicia',
  });
}

export function trackSubscribe(success: boolean): void {
  trackEvent(success ? 'newsletter_subscribe' : 'newsletter_subscribe_error', {
    method: 'mailchimp',
  });
}
