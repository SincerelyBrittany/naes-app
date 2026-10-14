# To Do — narenerussell.com

Last updated: 2026-10-14. SEO details live in [SEO-NOTES.md](SEO-NOTES.md).

## 1. Netlify setup
- [ ] **Update Node.js from 18 to 22.** Netlify's Agent Runners warn that Node 18 is too old (it's also past end-of-life). Either add a `.nvmrc` file containing `22` to the repo, or set `NODE_VERSION` = `22` in Netlify → Site configuration → Environment variables.
- [ ] Set the build command to `npm run build` (needed for prerendering).
- [ ] Add environment variables: `VITE_GA_MEASUREMENT_ID`, `VITE_SITE_URL` = `https://narenerussell.com`, plus the Stripe and EmailJS `VITE_…` values the site uses.

## 2. Open pull requests to decide on
- [ ] **#20 — SEO + Analytics fix** (`seo-setup`). Ready to merge after the Netlify setup above.
- [ ] **#19 — "adds css changes"** (`updates-css`). Most of it is already in `main` from the Phase 1 SEO commit. What's left: Mailchimp newsletter wiring in the popup, an `.env.example` file, and small privacy page edits. Its Analytics code is the older broken version. Recommendation: copy over the newsletter code if you still want it, then close this PR.
- [ ] **#14 — "adds admin logic"** (`admin`). Adds a Decap CMS admin page at `/admin` for editing events without code, an Events section, and makes the popup read from editable content. Still useful if you want an admin, but it's from May and will need conflicts fixed against the current site before merging.
- [ ] **#17 — "Update Site Content 'events'"** (`cms/site_content/events`). An event update made through the CMS. Depends on #14; merge or close it together with #14.

## 3. Admin
- [ ] Decide whether to revive #14 (Decap CMS) for editing events and popups.
- [ ] If yes: enable Netlify Identity + Git Gateway (Decap's login), fix conflicts, and test logging in at `/admin`.

## 4. SEO
- [ ] Finish the steps in [SEO-NOTES.md](SEO-NOTES.md): Search Console sitemap, Bing Webmaster Tools, Goodreads author profile, Amazon Author Central, getting on book lists.
- [ ] Fix small body text (about 11px; Google prefers 16px on mobile).
- [ ] Add FAQ to the top menu.

## 5. Stripe + signed copies with a personal message
- [ ] Decide what to sell: signed paperback, signed hardcover, or both, and the price including shipping.
- [ ] Simplest option: a **Stripe Payment Link** with a custom text field ("Who should the book be signed to? Any message?") and shipping address collection. No server code needed; the site just links a "Order a signed copy" button to it. Orders and messages show up in the Stripe dashboard.
- [ ] Check the Stripe IDs in `.env` files: `.env` has a `price_…` ID but `.env.production` has a `prod_…` (product) ID. Checkout needs the `price_…` one.
- [ ] Old checkout code exists in `src/Originalcomponents/` (`checkouthome.jsx`, `initialCheckoutScreen.jsx`, `OrderACopy.jsx`) and `src/lib/getStripe.js`. Reuse or delete.
- [ ] Test with Stripe test mode before going live.
