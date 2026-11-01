# To Do — narenerussell.com

Last updated: 2026-11-01. SEO details live in [SEO-NOTES.md](SEO-NOTES.md).

## 1. Netlify setup
- [ ] **Update Node.js from 18 to 22.** Netlify's Agent Runners warn that Node 18 is too old (it's also past end-of-life). Either add a `.nvmrc` file containing `22` to the repo, or set `NODE_VERSION` = `22` in Netlify → Site configuration → Environment variables.
- [x] Build command is `npm run build` (confirmed: prerendered text is live).
- [x] `VITE_GA_MEASUREMENT_ID` is set (confirmed in the live build).
- [ ] Double-check the other environment variables in Netlify: `VITE_SITE_URL` = `https://narenerussell.com`, plus the Stripe and EmailJS `VITE_…` values the site uses.

## 2. Open pull requests to decide on
- [x] **#20 / #21 — SEO + Analytics fix** (`seo-setup`). Merged and live.
- [ ] **#19 — "adds css changes"** (`updates-css`). Most of it is already in `main` from the Phase 1 SEO commit. What's left: Mailchimp newsletter wiring in the popup, an `.env.example` file, and small privacy page edits. Its Analytics code is the older broken version. Recommendation: copy over the newsletter code if you still want it, then close this PR.
- [ ] **#14 — "adds admin logic"** (`admin`). Adds a Decap CMS admin page at `/admin` for editing events without code, an Events section, and makes the popup read from editable content. Still useful if you want an admin, but it's from May and will need conflicts fixed against the current site before merging.
- [ ] **#17 — "Update Site Content 'events'"** (`cms/site_content/events`). An event update made through the CMS. Depends on #14; merge or close it together with #14.

## 3. Admin
- [ ] Decide whether to revive #14 (Decap CMS) for editing events and popups.
- [ ] If yes: enable Netlify Identity + Git Gateway (Decap's login), fix conflicts, and test logging in at `/admin`.

## 4. SEO
- [ ] **Google Search Console — not set up yet.** Confirm the site is verified, submit `sitemap.xml`, request indexing for the homepage, and link it to Google Analytics. Step-by-step checklist in [SEO-NOTES.md](SEO-NOTES.md#google-search-console-setup-not-done-yet).
- [ ] Bing Webmaster Tools (import from Search Console once it's set up).
- [ ] Remaining SEO steps in [SEO-NOTES.md](SEO-NOTES.md): Goodreads author profile, Amazon Author Central, getting on book lists.
- [ ] Fix small body text (about 11px; Google prefers 16px on mobile).
- [ ] Add FAQ to the top menu.

## 5. Stripe + signed copies with a personal message
- [ ] Decide what to sell: signed paperback, signed hardcover, or both, and the price including shipping.
- [x] Sandbox payment link is connected locally. Checkout collects the signature name, a personal message, and a shipping address. The button reads `VITE_PUBLIC_STRIPE_PAYMENT_LINK`.
- [ ] Add that same payment-link URL in Netlify so a preview or the live site can open checkout. The sandbox link only accepts test cards.
- [ ] **Later: taxes and shipping rates.** Add shipping rates so postage is its own charge (instead of being folded into the $20 price), and turn on Stripe Tax once the business location and sales-tax registrations are set. Checkout should then add the right tax on top of the book and shipping.
- [ ] Check the Stripe IDs in `.env` files: `.env` has a `price_…` ID but `.env.production` has a `prod_…` (product) ID. Checkout needs the `price_…` one.
- [ ] Old checkout code exists in `src/Originalcomponents/` (`checkouthome.jsx`, `initialCheckoutScreen.jsx`, `OrderACopy.jsx`) and `src/lib/getStripe.js`. Reuse or delete.
- [ ] Test with Stripe test mode before going live.
