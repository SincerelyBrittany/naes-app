# SEO Notes — Finicky Felicia (narenerussell.com)

## Strategies to set up

| Strategy | What it does | Cost |
| --- | --- | --- |
| SEO (Search Engine Optimization) | Helps the site appear in Google and Bing organic search results | Free to implement |
| Local SEO | Helps businesses appear in location-based searches and Google Maps | Free to start |
| AEO (Answer Engine Optimization) | Makes content easier for search engines and answer systems to extract | Free to implement |
| GEO (Generative Engine Optimization) | Improves how clearly AI search systems can discover and understand the business | Free to implement |

## Status and next steps

### SEO
Done:
- Title, description, canonical URL, and social share (Open Graph / Twitter) tags in `index.html`
- Book and WebSite structured data (JSON-LD) in `index.html`
- `robots.txt`, `sitemap.xml`, and the Google Search Console verification file
- Google Analytics 4 code (needs `VITE_GA_MEASUREMENT_ID` set in Netlify)

To do:
- [ ] Add `VITE_GA_MEASUREMENT_ID` and `VITE_SITE_URL` in Netlify environment variables, then redeploy
- [ ] Submit `sitemap.xml` in Google Search Console and request indexing for the homepage
- [ ] Add the site to Bing Webmaster Tools (it can import from Search Console)
- [ ] Get links from other sites: Amazon Author Central, Instagram/Facebook bios, libraries, schools, local news

### Local SEO
Google Business Profile is meant for businesses with a location or service area, so it may not fit an author on its own.
- [ ] Set up a profile only if there's a real business (for example, school visits or readings in a service area)
- [ ] Reach out to local libraries, bookstores, and schools for readings and listings that link back to the site

### AEO
- [ ] Add a short FAQ section to the site (age range, what the book teaches, where to buy, school visits)
- [ ] Mark up the FAQ with `FAQPage` structured data
- [ ] Use plain, direct sentences that answer common searches, like "picky eater book for kids"

### GEO
- [ ] Add `sameAs` links (Amazon, Barnes & Noble, Instagram, Facebook) to the author info in the structured data
- [ ] Keep the author name, book title, and description the same everywhere online
- [ ] Add an `llms.txt` file with a plain-text summary of the book and author
- [ ] Get the book mentioned on other sites: reviews, blogs, interviews, Goodreads
