# SEO Notes — Finicky Felicia (narenerussell.com)

## Strategies to set up

| Strategy | What it does | Cost |
| --- | --- | --- |
| SEO (Search Engine Optimization) | Helps the site appear in Google and Bing organic search results | Free to implement |
| Local SEO | Helps businesses appear in location-based searches and Google Maps | Free to start |
| AEO (Answer Engine Optimization) | Makes content easier for search engines and answer systems to extract | Free to implement |
| GEO (Generative Engine Optimization) | Improves how clearly AI search systems can discover and understand the business | Free to implement |

## Realistic ranking goals

A single-book author site won't outrank Amazon, Scholastic, or "best of" lists for broad terms like "books" or "children's books". Aim for:

1. **Brand searches:** "Finicky Felicia", "Narene Russell". These should rank #1 once indexed.
2. **Long-tail searches:** "picky eater children's book", "children's book about eating vegetables", "picture book about a Black girl who is a picky eater". These are winnable.
3. **Lists and roundups:** for broad terms like "children's books by Black authors", the realistic path is getting the book *included* on the pages that already rank (blog lists, library lists, Goodreads lists), not outranking them.

## Status

### SEO
Done:
- Page content is prerendered into the HTML at build time (`scripts/prerender.mjs`), so crawlers see the full text without running JavaScript
- Title, description, canonical URL, and social share tags in `index.html`
- Book, Person (author), and WebSite structured data with both editions (ISBNs, prices, publishers, page count, illustrator, age range)
- Book cover and author photo are real `<img>` tags with descriptive alt text, so they can appear in Google Images
- `robots.txt`, `sitemap.xml` (with images and last-modified dates), and Search Console verification file
- Removed unused fonts, scripts, and a broken stylesheet link to speed up page load
- Google Analytics 4 code (needs `VITE_GA_MEASUREMENT_ID` set in Netlify)

To do:
- [ ] In Netlify, make sure the build command is `npm run build` (not `vite build`), or prerendering won't run
- [ ] Add `VITE_GA_MEASUREMENT_ID` and `VITE_SITE_URL` in Netlify environment variables, then redeploy
- [ ] Submit `sitemap.xml` in Google Search Console and request indexing for the homepage
- [ ] Add the site to Bing Webmaster Tools (it can import from Search Console)
- [ ] Test the live page at https://search.google.com/test/rich-results and https://validator.schema.org
- [ ] Get links from other sites: Amazon Author Central, Goodreads author page, Instagram/Facebook bios, libraries, schools, local news
- [ ] Update prices in `index.html` structured data if they change on Amazon or Barnes & Noble

### Local SEO
Google Business Profile is meant for businesses with a location or service area, so it may not fit an author on its own.
- [ ] Set up a profile only if there's a real business (for example, school visits or readings in a service area)
- [ ] Reach out to local libraries, bookstores, and schools for readings and listings that link back to the site
- [ ] When events happen, add them to the site with the city and venue named in the text

### AEO
Done:
- FAQ section (`src/components/FAQ.tsx`) with plain-sentence answers and matching `FAQPage` structured data

To do:
- [ ] Add more questions as real readers ask them (school visits, bulk orders for classrooms, activities)

Note: Google only shows FAQ rich results for government and health sites, but the content still helps answer engines and AI tools quote the site.

### GEO
Done:
- `llms.txt` with a plain-text summary of the book and author
- Author linked to Instagram and Facebook via `sameAs` in structured data
- Full page text available without JavaScript (AI crawlers don't run JavaScript)

To do:
- [ ] Add Amazon Author Central and Goodreads author page URLs to `sameAs` once they exist
- [ ] Keep the author name, book title, and description the same everywhere online
- [ ] Get the book mentioned on other sites: reviews, blogs, interviews, Goodreads lists, podcasts

### "Black author" / representation searches
The site doesn't say anything about representation yet, so it can't rank for those searches. Waiting on Narene's preferred wording before adding it to the page text, meta description, and structured data.

## Other issues found in review
- Body text across the site is small (about 11px) because `bootstrap.css` sets the root font size to 10px. Google's mobile checks prefer 16px body text. Fixing this means adjusting sizes in every component's CSS.
- The social share image (`finicky-felicia-cover.jpg`) is portrait, so Facebook and X crop it. A 1200×630 landscape version would look better in shares.
