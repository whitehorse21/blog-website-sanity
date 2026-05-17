# Inkwell — Professional Blog with Next.js & Sanity

A polished editorial blog built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Sanity CMS**. Features a magazine-style layout, responsive design, Portable Text rendering, and an embedded Sanity Studio.

![Inkwell Blog](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop)

## Features

- **Editorial homepage** — Hero, featured stories, category grid, newsletter CTA
- **Blog listing** — Filterable by category with horizontal and card layouts
- **Article pages** — Full Portable Text support, author bio, related posts
- **About page** — Mission, values, team, contact
- **Sanity Studio** — Content management at `/studio`
- **Demo content** — Works out of the box with mock data (no Sanity project required)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sanity CMS setup

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.example` to `.env` (or `.env.local` if you prefer local-only overrides) and add your project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Next.js loads `.env` automatically; you do not need a separate `.env.local` file.

3. Deploy schemas and open Studio:

```bash
npm run deploy:studio   # hosted studio (requires .env with project ID)
npm run dev             # embedded studio at http://localhost:3000/studio
```

Hosted Studio only bundles `SANITY_STUDIO_*` env vars (not `NEXT_PUBLIC_*`). Ensure `.env` has your project ID, then redeploy:

```bash
npm run deploy:studio
```

You can set `SANITY_STUDIO_PROJECT_ID` explicitly or rely on auto-copy from `NEXT_PUBLIC_SANITY_PROJECT_ID` during deploy.

4. Seed sample content (recommended):

```bash
# Add SANITY_API_TOKEN to .env (Editor token from sanity.io/manage → API → Tokens)
npm run seed
```

This uploads images and creates **3 authors**, **5 categories**, and **8 posts** (same content as the built-in demo). Re-running `npm run seed` updates documents in place. To wipe and re-seed:

```bash
npm run seed:clear
```

Or create content manually in Studio: **Authors** → **Categories** → **Posts**. Mark posts as **Featured** for the homepage hero.

## Project structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # UI, layout, blog, home sections
├── lib/              # Data fetching & mock content
├── sanity/           # Sanity client & image helpers
└── types/            # TypeScript types
sanity/
└── schemaTypes/      # Post, Author, Category, Block Content
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |
| `npm run seed` | Seed Sanity with demo content |
| `npm run seed:clear` | Clear seed docs, then re-seed |

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Sanity](https://www.sanity.io/) v5 + [next-sanity](https://github.com/sanity-io/next-sanity)
- [@portabletext/react](https://github.com/portabletext/react-portabletext)

## License

MIT
