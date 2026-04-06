# Project Guidelines

## Code Style
- TypeScript strict mode enabled ([tsconfig.json](tsconfig.json))
- Tailwind CSS with custom color scheme: primary green (#4a7c59), accent red (#c0392b), gold (#d4a843)
- shadcn/ui components using CVA for styling variants
- ESLint configured but build errors ignored for deployment flexibility

## Architecture
- Next.js 15 App Router with dynamic locale segments ([app/[locale]/](app/[locale]/))
- Custom i18n implementation supporting 4 languages (en, es, pl, de) via JSON messages
- JSON-based content management in [data/content/](data/content/) for CMS-like editing
- Prisma with PostgreSQL for contact forms and newsletter subscriptions
- Server components by default; client components only for forms and interactive UI

## Build and Test
- `npm run dev` – Development server on localhost:3000
- `npm run build` – Generates Prisma client and builds for production
- `npm run lint` – ESLint validation (errors don't block build)
- Database seeding via [scripts/safe-seed.ts](scripts/safe-seed.ts) (protected against production data deletion)

## Conventions
- Locale-aware routing: routes prefixed with /[locale]/
- Content fields support inline translations with locale suffixes (e.g., `title_es`, `title_pl`)
- Use custom `<Link>` component ([lib/i18n-link.tsx](lib/i18n-link.tsx)) for automatic locale prefixing
- Forms are client components posting to server API routes
- Environment variables required: DATABASE_URL, SMTP_* for email, CONTACT_EMAIL_RECIPIENT

See [GUIA_COMPLETA.md](GUIA_COMPLETA.md) for content editing guidelines and [GUIA_GITHUB_HOSTINGER.md](GUIA_GITHUB_HOSTINGER.md) for deployment instructions.