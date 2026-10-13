# Rafsan Labs

Static two-page site: the **Rafsan Labs** company homepage (`index.html`) and the personal portfolio (`portfolio.html`). Vanilla HTML, CSS, and JavaScript — no build step.

## Preview locally

From the repo root:

```bash
npx --yes serve
```

Or use the VS Code Live Server extension. Open `/` for the company site and `/portfolio.html` for the personal page.

Opening files with the `file://` protocol works for layout. Formspree and some embeds need `http://localhost`.

## Edit content

Almost everything on the company homepage is in [`data/content.js`](data/content.js) (`window.SITE`). After you change that file, refresh the browser.

### Add a project

1. Append an object to `SITE.projects`.
2. Set `category` to one of: `ai-ml`, `cybersecurity`, `video`, `animation` (or it will still appear under **All**).
3. Fill `title`, `description`, `tools`, `role`, `outcome`, and `links`.
4. Optional `thumbnail` (image URL or `assets/img/...`).
5. Optional `files` array (see below).
6. Do not invent clients or metrics. If a field is unknown, leave a `// TODO:` comment.

The Work section initially shows four projects. Its category filters and View all / View fewer control update the visible collection and project count. Categories without published projects display a message instead of a blank grid. Project previews use a category illustration when no thumbnail is supplied or an image fails to load.

Set `featured: true` on a real project to include it in Featured Work. Featured cards use the same project details and original links as Work; the section is hidden when no real projects are marked as featured.

### Add a PDF or PPTX

1. Put PDFs in `assets/docs/` and decks in `assets/decks/`.
2. On the project, add:

```js
files: [
  { type: "pdf", label: "Brief", url: "assets/docs/your-file.pdf" },
  { type: "pptx", label: "Deck", url: "assets/decks/your-file.pptx" },
  { type: "link", label: "Live URL", url: "https://example.com" },
  { type: "video", label: "Walkthrough", url: "https://youtu.be/VIDEO_ID" }
]
```

PDFs open in an embedded viewer in the project modal. PPTX files get a download button (browsers cannot render PowerPoint). YouTube links embed when the modal opens.

### Add a testimonial

The company homepage's Client reviews section displays real entries from `SITE.testimonials`, or prefers `SITE.fiverrReviews` when that array contains published reviews. Replace the placeholder entry with an authentic `name` and `quote`, remove `placeholder: true`, and optionally supply `role` and a `rating` between 1 and 5. Only include feedback you have permission to publish. Blank and placeholder reviews are not rendered, and no rating is assumed when one is missing.

Until real quotes are supplied, the section displays a styled link to the public Fiverr profile instead of invented testimonials. The profile URL comes from `SITE.links.fiverr`. This is a display-only section; it does not scrape reviews or collect visitor submissions.

### Add a certificate

Put the image in `assets/img/` (or use a verification URL). In `SITE.certificates`, set `placeholder: false` (or omit it), and provide `image` and/or `url` plus `title`, `issuer`, and `year`. Cards without a real image or URL stay hidden.

### Formspree

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the form ID (the segment after `/f/`).
3. Paste it into `SITE.formspreeId` in `data/content.js` (`// TODO: FORMSPREE_FORM_ID`).
4. Until that ID is set, the submit button stays disabled and visitors can use the mailto link.

## Deploy

Upload the whole folder to any static host (GitHub Pages, Netlify, or cPanel). There is no build. Point the domain to this directory so `https://rafsanlabs.top/` serves `index.html`.

For GitHub Pages: Settings → Pages → deploy from the `company-site` branch (or merge to the branch Pages uses), site root.

`sitemap.xml` and `robots.txt` already list `https://rafsanlabs.top/`.

## Still needed from you

- Formspree form ID
- Real testimonials (quote + name; optional role)
- Certificate scans or verification URLs
- Per-project role/outcome polish, and any PDF/PPTX case files
- Street address for the shop, if you want it displayed (the map uses the existing shop coordinates)
- Logo if you have a mark beyond the RL favicon / wordmark
- Confirm personal phone and Gmail should stay only on `portfolio.html`

## Shop map and visual style

The Physical shop section uses the shop name and latitude/longitude in `SITE.company.location`. Its embedded map, directions, and Google Maps link all use the same coordinates. Visitors can use the direct links if the third-party embed is blocked. Update these coordinates only when the shop location changes; a street address or opening hours are not assumed.

Both pages share the warm editorial styling in `css/luxury.css`. The company site's light/dark theme colors remain in `css/company.css`, and the portfolio keeps its project reveal toggle and existing interactions.
