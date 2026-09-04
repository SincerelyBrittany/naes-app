/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_MAILCHIMP_URL?: string;
  readonly VITE_MAILCHIMP_DC?: string;
  readonly VITE_REACT_APP_MAILCHIMP_U?: string;
  readonly VITE_REACT_APP_MAILCHIMP_ID_ONE?: string;
  readonly VITE_REACT_APP_MAILCHIMP_ID_TWO?: string;
  readonly VITE_EMAIL_JS_CODE?: string;
  readonly VITE_EMAIL_AUTH?: string;
  readonly VITE_EMAIL_PURCHASE?: string;
  readonly VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY?: string;
  readonly VITE_PUBLIC_STRIPE_PRICE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
