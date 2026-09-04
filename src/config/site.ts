/**
 * Site-wide marketing / SEO constants.
 * Set VITE_SITE_URL in .env to your live Netlify (or custom) domain — no trailing slash.
 */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://narenerussell.com';

export const SITE_NAME = "Nae's Place";
export const BOOK_TITLE = 'Finicky Felicia';
export const AUTHOR_NAME = 'Narene Russell';

export const AMAZON_URL =
  'https://www.amazon.com/Finicky-Felicia-Narene-Russell/dp/B0B45CHGVW';
export const BARNES_URL =
  'https://www.barnesandnoble.com/w/finicky-felicia-narene-russell/1144045912';

export const INSTAGRAM_URL = 'https://www.instagram.com/naes.place/';
export const FACEBOOK_URL =
  'https://www.facebook.com/p/Finicky-Felicia-100084813500514/';

/** Mailchimp form POST URL (built from env, or override with VITE_MAILCHIMP_URL). */
export function getMailchimpSubscribeUrl(): string | null {
  const full = import.meta.env.VITE_MAILCHIMP_URL as string | undefined;
  if (full?.startsWith('http')) return full;

  const u = import.meta.env.VITE_REACT_APP_MAILCHIMP_U as string | undefined;
  const id =
    (import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_ONE as string | undefined) ||
    (import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_TWO as string | undefined);
  const dc = (import.meta.env.VITE_MAILCHIMP_DC as string | undefined) || 'us1';

  if (!u || !id) return null;
  return `https://${dc}.list-manage.com/subscribe/post?u=${u}&id=${id}`;
}
