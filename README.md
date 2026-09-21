# Stefano Mercadante - Software Engineer CV

A clean, modern, and component-based Curriculum Vitae built with **Astro**, **TypeScript**, and **CSS3**. It provides reusable components, typed data modules for all three languages (English, German, Italian), and generates 100% zero-JS static HTML for pixel-perfect A4 PDF exports.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development (Live Preview with HMR)
Start the local development server:
```bash
npm run dev
# Or: npm start
# Opens http://localhost:4321
```
Any edits in `src/data/` or components will instantly reload in the browser.

### 3. Build Static HTML
To compile the static HTML into `dist/`:
```bash
npm run build
```
This produces:
- `dist/index.html` (English)
- `dist/index-de.html` (German)
- `dist/index-it.html` (Italian)

### 4. Export to PDF (Command Line)
Export to PDF using headless Google Chrome:
```bash
# Export English CV -> output/CV_Stefano_Mercadante.pdf
npm run export:pdf

# Export German CV -> output/CV_Stefano_Mercadante_de.pdf
npm run export:pdf:de

# Export Italian CV -> output/CV_Stefano_Mercadante_it.pdf
npm run export:pdf:it

# Export all 3 languages at once:
npm run export:pdf:all
```
*(You can also invoke `./export-pdf.sh [en|de|it|all]` directly).*

### 5. Export to PDF (Browser Print)
1. Open the page in your browser (`npm run dev` or `open dist/index.html`).
2. Click the **"Print / Save as PDF"** button at the top (or press `Cmd + P`).
3. In the print dialog:
   - **Destination**: *Save as PDF*
   - **Paper size**: *A4*
   - **Margins**: *None* (or *Default*)
   - **Options**: Check *Background graphics*
4. Click **Save**.

---

## 📁 Project Structure

```
cv-stefano-soft-eng/
├── astro.config.mjs               # Astro static file output config
├── package.json                   # NPM scripts & dependencies
├── export-pdf.sh                  # Headless Chrome PDF export script
├── public/
│   ├── assets/
│   │   └── stef.jpg               # Profile photo
│   └── styles.css                 # Responsive preview & print styling (A4 pagination)
├── src/
│   ├── types/
│   │   └── cv.ts                  # TypeScript interfaces for CV data & translations
│   ├── data/
│   │   ├── cv-en.ts               # English content
│   │   ├── cv-de.ts               # German content
│   │   └── cv-it.ts               # Italian content
│   ├── components/
│   │   ├── ScreenActions.astro    # Print button & language switcher
│   │   ├── HeaderBanner.astro     # Name, title, subtitle banner
│   │   ├── Sidebar.astro          # Photo, contact info, about me, languages, interests
│   │   ├── Section.astro          # Reusable section container with title & divider
│   │   ├── HighlightsTable.astro  # Profile and focus table
│   │   ├── SkillsTable.astro      # Categorized technical skills table
│   │   ├── TimelineItem.astro     # Experience & education timeline items
│   │   ├── ProjectsTable.astro    # Selected personal projects list
│   │   └── PageFooter.astro       # Printable page footer with contact info
│   ├── layouts/
│   │   └── CVLayout.astro         # Two-page strict A4 layout shell
│   └── pages/
│       ├── index.astro            # English CV (renders to dist/index.html)
│       ├── index-de.astro         # German CV (renders to dist/index-de.html)
│       └── index-it.astro         # Italian CV (renders to dist/index-it.html)
├── output/                        # Exported PDFs
│   ├── CV_Stefano_Mercadante.pdf
│   ├── CV_Stefano_Mercadante_de.pdf
│   └── CV_Stefano_Mercadante_it.pdf
└── dist/                          # Compiled zero-JS static HTML and assets
```

---

## ✏️ How to Modify Your CV

Instead of editing raw HTML tags across multiple files:

1. **Update Content**: Edit [src/data/cv-en.ts](file:///Users/stef/Desktop/Dev/cv-stefano-soft-eng/src/data/cv-en.ts) (and German/Italian counterparts). TypeScript provides autocomplete and validation for all fields.
2. **Update Components / Styling**: Edit components in `src/components/` or `public/styles.css`. Changes immediately apply across all languages.
3. **Re-export**: Run `npm run export:pdf:all` to generate refreshed PDFs in seconds.

---

## 🎨 Design & Print Notes

- **Font**: Uses `Raleway` via Google Fonts.
- **Strict 2-Page Layout**:
  - Each `.page` container is fixed to `210mm` $\times$ `297mm` (A4).
  - Page breaks (`page-break-after: always; break-after: page;`) ensure clean pagination without spilling onto unintended pages.

---

## 📦 Automated GitHub Releases

This repository includes a GitHub Actions workflow ([`.github/workflows/release.yml`](.github/workflows/release.yml)) that automatically builds the project, compiles the 3 PDFs with headless Chrome, and attaches them as release assets.

### Option 1: Via Git Tag
```bash
git tag v1.0.0
git push origin v1.0.0
```
GitHub Actions will automatically create release `v1.0.0` and attach all 3 PDFs.

### Option 2: Via GitHub UI
1. Go to **Releases** > **Draft a new release**.
2. Select or create a tag (e.g., `v1.0.0`), give it a title, and click **Publish release**.
3. The workflow triggers, builds the PDFs in the cloud, and attaches them to the release.

### Option 3: Manual Trigger
Go to **Actions** > **Release CV PDFs** > **Run workflow**.
