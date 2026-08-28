# Meta Creative SaaS Starter

Starter scaffold for an AI Creative Intelligence SaaS for Meta Ads.

## Run locally
1. Copy `.env.example` to `.env.local`.
2. Fill Supabase values.
3. Run the SQL in `database/schema.sql` in a Supabase/Postgres project.
4. Install dependencies: `npm install`
5. Start: `npm run dev`

## Current scaffold
- Next.js app shell
- Dashboard placeholder
- Campaign brief UI
- Meta connection UI placeholder
- Supabase client bootstrap
- Meta Business SDK bootstrap
- Initial Postgres schema
- Product spec

## Recommended next implementation
1. Authentication + workspaces
2. Persist campaign briefs
3. AI strategy endpoint returning structured hypotheses
4. Copy generation endpoint
5. Creative asset generation/storage
6. Meta OAuth + ad account selection
7. Meta insights sync
8. Performance-to-creative learning layer
