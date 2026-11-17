# AppBharat.com — India's App Guide

Static, AdSense-ready website for **appbharat.com**: Indian & government app directory, Made-in-India alternatives, app comparisons, free tools (app cost calculator, safety check, name generator, data calculator), guides, auto-updated news, video hub, contests, careers/talent network, donations, advertising — and a high-converting **"Get a free app quote"** lead-generation funnel.

## How it works
- Plain static HTML/CSS/JS — no build step. `data/apps.json` drives the directory, government apps, alternatives, compare and app-of-the-day (rotates daily automatically).
- News is self-updating: pages read `data/news.json`; when it's empty they pull live Google News headlines in the browser.
- Optional server-side refresh: copy `automation/daily-news.yml` into `.github/workflows/` (GitHub → Add file → Create new file) to fetch headlines and refresh sitemap dates daily via `scripts/update_news.py`.
- Hosting: GitHub Pages → Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
- Forms post via FormSubmit AJAX; the destination address is assembled at runtime and never appears in markup. The **first** submission triggers a one-time activation email that must be confirmed.

## Add content
- New app: add an object to `data/apps.json` and push.
- New guide: copy any file in `guides/`, edit the text, and link it from `guides.html` and `sitemap.xml`.

## Custom domain
Add `appbharat.com` in Settings → Pages, then DNS: A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and `CNAME www → webworksa1.github.io`. Enable *Enforce HTTPS*.

## Phase-wise build prompt (reusable)
1. **Strategy** — Position the domain as an India app-discovery + app-building lead-gen hub. Revenue: AdSense (high-CPC "app development cost", fintech, safety), quote leads sold/referred to dev agencies, featured listings, sponsorships, donations.
2. **Benchmark** — Review 35+ leaders (Product Hunt, AlternativeTo, AppBrain, SaaSHub, Inc42, There's An AI For That, UMANG, DigiLocker, MyGov, Google Play, App Store, G2, Capterra, GoodFirms, Clutch, Sensor Tower, 42matters, AppAgg, Uptodown, Softonic, YourStory, Entrackr, Gadgets 360, 91mobiles, Smartprix, Beebom, Digit, BetaList, Indie Hackers, Futurepedia, Toolify, Devpost, Unstop, TechCrunch, MacUpdate) and extract: search-first hero, category grids, upvotes, alternatives, comparison tables, featured/sponsored badges, newsletters, launch contests, submit-a-product, media kits, trust/legal footers.
3. **Foundation** — Static HTML/CSS/JS, mobile-first, dark mode, Ctrl+K search, cookie consent, schema.org (WebSite, Organization, Article, FAQPage), sitemap, robots, ads.txt, AdSense script in every `<head>`.
4. **Content** — Directory + government apps + alternatives + compare; 8+ original long-form guides; privacy (AdSense cookie wording), terms, disclaimer with trademark/copyright disclosure.
5. **Monetisation & conversion** — Multi-step quote funnel, cost calculator → prefilled quote, exit-intent lead magnet (launch checklist), sticky mobile CTA, inline lead bands on every page, newsletter, submit-app (featured upsell), advertise, donate tiers, contests with sponsor slots, careers + talent network.
6. **Automation** — data-driven pages, daily rotating app of the day, live news feed, optional GitHub Actions refresh.
7. **Launch** — Push to `main`, enable Pages, connect domain, submit sitemap to Search Console, apply for AdSense once content is indexed.

© AppBharat.com. Third-party names and trademarks belong to their owners; this is an independent site not affiliated with the Government of India.
