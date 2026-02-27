# Running Context — Hackathon Demo

## Last Updated
2026-02-27 — display images split into 3 age-targeted campaigns; .gitignore created; build verified clean

## Current Status
- [x] Frontend-only Next.js demo created
- [x] 4 demo campaigns → RSA Copy, 3×Display Images (by age), Landing Page
- [x] Display Images split into 3 audience segments:
  - `demo-images-young`  — Younger Driver (18-30) — 5 new panellists (Jake, Maya, Tom, Sofia, Callum)
  - `demo-images-peak`   — EV Adoption Peak (35-54) — original 5 panellists
  - `demo-images-older`  — Older Driver (60+) — 5 new panellists (David, Margaret, George, Helen, Peter)
- [x] Full focus group mock data (5 panellists, scores, synthesis per iteration)
- [x] Fake loading with step-by-step progress (8s create, 7s iterate)
- [x] Landing page HTML rendered in iframe (all 3 iterations pre-built)
- [x] .gitignore created at repo root
- [x] 9 real EV images downloaded from Unsplash CDN (public/images/ev-display-v*-*.jpg)
- [ ] Separate images per age segment (all 3 campaigns share same 9 images for now)
- [ ] Video campaign assets (when user provides)
- [x] Git init / GitHub push / Vercel deployment — COMPLETE
  - GitHub: https://github.com/javierchamorrowolters/carwow-ai-optimiser
  - Live URL: https://carwow-ai-optimiser.vercel.app (permanent alias)
  - Auto-deploy: every `git push` to main triggers GitHub Actions → Vercel production

## Campaign IDs
| ID                  | Name                                              | Redirect from "New" |
|---------------------|---------------
------------------------------------|---------------------|
| demo-rsa            | EV Switch — RSA Copy                              | ✓ (rsa_copy type)   |
| demo-images-young   | EV Switch — Display Images — Younger Driver       |                     |
| demo-images-peak    | EV Switch — Display Images — EV Adoption Peak     | ✓ (image type)      |
| demo-images-older   | EV Switch — Display Images — Older Driver         |                     |
| demo-landing        | EV Switch — Landing Page                          | ✓ (landing_page)    |

## How to Run
```bash
cd "/Users/javierchamorro/Random Projects/hackathon-demo/frontend"
npm run dev
```
Open: http://localhost:3000

## Vercel Deployment Steps (TODO for user)
1. `git init && git add . && git commit -m "Initial commit"` in repo root
2. Push to GitHub: create new repo, then `git remote add origin <url> && git push -u origin main`
3. Go to vercel.com → New Project → Import GitHub repo
4. **Set Root Directory to `frontend`** (critical — Next.js app is in subdirectory)
5. Leave all other settings as default → Deploy
6. Every `git push` to main auto-deploys

## Demo Script (for presentation)
1. Open dashboard — show 5 pre-built campaigns (3 image variants visible in Display Images section)
2. Click "+ New" → fill in brief → submit → watch 8s loading steps
3. Redirect to campaign page → iteration 1 already done
4. Click "Run Focus Group & Iterate" → watch 7s AI steps
5. Iteration 2 appears with improved scores
6. Iterate once more → iteration 3, score ~8.4-8.9
7. "All iterations complete" state shown
