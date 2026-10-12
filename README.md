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

Replace the placeholder entry in `SITE.testimonials`. Remove `placeholder: true` and set a real `name`, `quote`, and optional `role`. Entries with `placeholder: true` are not rendered. If none are real, the whole Testimonials section stays hidden.

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
- English shop name and street for the map caption (the embed is already in place)
- Logo if you have a mark beyond the RL favicon / wordmark
- Confirm personal phone and Gmail should stay only on `portfolio.html`
