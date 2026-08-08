# BestCloudAccounts

Production-ready Next.js foundation: App Router, TypeScript, Tailwind CSS, ESLint, and a Supabase-ready architecture. No UI has been built yet — this is the project scaffold only.

## Stack

- **Next.js 16** — App Router
- **TypeScript** (strict)
- **Tailwind CSS 4**
- **ESLint** (`eslint-config-next`)
- **Supabase** — `@supabase/supabase-js` + `@supabase/ssr`, with browser/server clients and session-refresh middleware already wired up

## Getting Started

1. Copy the env file and fill in real values:
   ```bash
   cp .env.local.example .env.local
   ```
2. Install dependencies (already done if you're reading this after setup):
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
  app/            # App Router routes, layouts, metadata routes (robots.ts, sitemap.ts)
  components/
    ui/           # Shared, reusable UI primitives
    layout/       # Header/footer/nav and other structural components
  config/
    site.ts       # Central site config (name, description, URL) used for SEO metadata
  lib/
    supabase/
      client.ts     # Browser client (Client Components)
      server.ts     # Server client (Server Components, Server Actions, Route Handlers)
      middleware.ts # Session-refresh helper used by root middleware.ts
  types/
    index.ts       # Shared app types
    supabase.ts     # Placeholder for generated Supabase DB types
middleware.ts       # Refreshes Supabase auth session on every request
```

## Supabase

Client/server helpers follow the official `@supabase/ssr` pattern for the App Router. Once a Supabase project exists:

1. Fill in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.
2. Generate typed DB types to replace `src/types/supabase.ts`:
   ```bash
   npx supabase gen types typescript --project-id <project-id> > src/types/supabase.ts
   ```

## SEO

- `src/config/site.ts` is the single source of truth for site name/description/URL — metadata, Open Graph, robots, and sitemap all read from it.
- `src/app/robots.ts` and `src/app/sitemap.ts` are Next.js metadata routes, served at `/robots.txt` and `/sitemap.xml`.
- Update `NEXT_PUBLIC_SITE_URL` in `.env.local` once a real domain is live.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
