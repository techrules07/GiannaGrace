# giannagrace.org

Official website for the **Gianna Grace** Google Play developer account, built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Pages

| Route             | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `/`               | Home — developer intro and featured apps            |
| `/apps`           | All published Android applications                  |
| `/privacy-policy` | Privacy policy (linkable from Google Play listings) |
| `/contact`        | Contact email and social links                      |

`robots.txt`, `sitemap.xml`, the favicon, and the Open Graph image are generated automatically from `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/icon.svg`, and `src/app/opengraph-image.tsx`.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Project Structure

```
src/
  app/                  # Routes (App Router)
    apps/               # /apps
    contact/            # /contact
    privacy-policy/     # /privacy-policy
    icon.svg            # Favicon
    opengraph-image.tsx # OG/social share image
    robots.ts           # robots.txt
    sitemap.ts          # sitemap.xml
  components/           # Reusable UI (header, footer, app card, Play badge)
  lib/
    site.ts             # Site-wide config: name, URL, email, socials, nav
    apps.ts             # Published app catalog
public/
  apps/                 # App icons
```

## Common Edits

- **Add a new app** — append an entry to `src/lib/apps.ts` and drop its icon in `public/apps/`. The home page, `/apps`, and structured data update automatically.
- **Change contact email or socials** — edit `src/lib/site.ts`.
- **Replace the app icon placeholder** — `public/apps/hindu-calendar.svg` is a placeholder; swap it with the real Play Store icon (512×512 PNG works; update the `icon` path in `src/lib/apps.ts`).
- **Official Google Play badge** — the site ships a self-hosted badge component (`src/components/google-play-badge.tsx`). To use Google's official artwork, download it from [play.google.com/badges](https://play.google.com/intl/en_us/badges/) and swap it in.

## Deployment

The site is fully static-friendly and deploys as-is:

- **Vercel** — import the repo, no configuration needed.
- **Cloudflare Pages** — use the Next.js preset (`@cloudflare/next-on-pages`) or add `output: "export"` to `next.config.ts` for a pure static export.

## Notes

- Review `src/app/privacy-policy/page.tsx` before publishing — confirm the statements (offline-only, no analytics/ads SDKs) match the actual app behavior, and update the `LAST_UPDATED` date when the policy changes.
- The privacy policy URL for the Play Console listing is `https://giannagrace.org/privacy-policy`.
