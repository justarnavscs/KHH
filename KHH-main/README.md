# The Studio ArnX — Arnav Agarwal's Portfolio

A personal portfolio for Arnav Agarwal, a student with interests in entrepreneurship, programming, cybersecurity, and eBook writing.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx`: portfolio homepage and sections
- `src/config/site.js`: primary/project domains, social profiles, and publication links
- `src/index.css`: global styling
- `public/`: brand assets, icons, and web app manifest

## Domains and search metadata

The Studio ArnX is the primary portfolio at `https://khh-weld.vercel.app`; `https://ArnX.me` is the separate JARVIS I Robot project destination. To migrate the portfolio later, set `VITE_SITE_URL` in the deployment environment to the new primary origin and rebuild. This value controls canonical and Open Graph URLs, structured-data URLs, the sitemap, and the sitemap reference in `robots.txt`; `src/config/site.js` contains the verified current-domain fallback. Do not set it to ArnX.me unless the portfolio itself moves there.

Social profile URLs and optional LinkedIn destination are managed in `src/config/site.js`. The LinkedIn URL is intentionally blank because no destination could be confirmed from the project files. Each book's `publicationUrl` in that file is also intentionally blank until its actual publication page is verified.

The current Google Search Console verification is retained in `index.html`; optional `VITE_GOOGLE_SITE_VERIFICATION` and `VITE_BING_SITE_VERIFICATION` deployment variables can supply new public verification tags when needed. No Google Analytics measurement ID is configured. A domain migration may require new verification tokens and Search Console/Bing account actions; no external verification or sitemap submission is performed by this project.

## About

The portfolio presents Arnav's learning journey, interests, and work in progress. It is intentionally written as a student portfolio; it does not claim professional certifications, employment history, or accomplishments that have not been supplied.
