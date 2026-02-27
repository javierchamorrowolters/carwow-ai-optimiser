# Barney Demo — Claude Project Context

## Project Purpose
Simplified **demo version** of the Carwow AI Optimiser for hackathon presentation.
Frontend-only Next.js app with pre-baked mock data simulating AI generation.
No backend. No real API calls. Fake loading (7-8s) then reveals pre-built iterations.

## Tech Stack
- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **Data:** Static mock data in `src/data/mockData.ts` — no backend
- **Deploy:** Vercel (or `npm run dev` locally)

## Architecture
```
[Next.js Frontend — frontend/]
  src/data/mockData.ts   ← all pre-baked campaigns, iterations, focus groups
  app/page.tsx           ← dashboard
  app/campaign/new/      ← fake creation flow (8s loading → redirect)
  app/campaign/[id]/     ← iteration viewer with fake "Run Focus Group" button
  src/components/        ← AssetDisplay, FocusGroupSummary, IterationCard, LoadingState
  public/images/         ← placeholder images (user to supply real ones)
  public/landing/        ← pre-built landing page HTML files
```

## Key Files
- `frontend/src/data/mockData.ts` — ALL mock data (campaigns, iterations, focus group results)
- `frontend/app/campaign/[id]/page.tsx` — main campaign view, controls `revealed` state
- `frontend/src/components/AssetDisplay.tsx` — renders rsa_copy, image, landing_page, video
- `frontend/src/components/FocusGroupSummary.tsx` — scores + panellist transcript
- `frontend/.env.local` — not needed (no backend)

## Demo Flow
1. Homepage shows 3 pre-built campaigns (RSA Copy, Display Images, Landing Page)
2. "+ New" → form → 8s fake loading → redirects to matching demo campaign
3. Campaign page shows iteration 1 (already done)
4. "Run Focus Group & Iterate" → 7s fake loading → reveals iteration 2
5. Repeat → iteration 3 → "All iterations complete"

## Pre-built Campaigns
- `demo-rsa` — EV Switch RSA Copy (3 iterations, improving from 4.6 → 6.7 → 8.5 overall)
- `demo-images` — EV Display Images (3 iterations, 4.5 → 6.7 → 8.6)
- `demo-landing` — EV Landing Page (3 iterations, 4.7 → 7.1 → 8.9)

## Assets to Substitute
- `public/images/ev-display-v[1-3]-[square|portrait|story].jpg` — 9 placeholder images
  (user will provide real Gemini-generated images)

## Rules (IMPORTANT)
1. **Update `.claude/context.md` after every single prompt — no exceptions**
2. Run with: `cd frontend && npm run dev` — open http://localhost:3000
3. Deploy: push to GitHub → auto-deploy on Vercel
4. No backend needed — everything is in `src/data/mockData.ts`

## Working Directory
`/Users/javierchamorro/Random Projects/hackathon-demo`
GitHub: push to new repo or same `we-discover/hackathon` (separate branch)
