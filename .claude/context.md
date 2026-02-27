# Running Context — Hackathon Demo

## Last Updated
2026-02-27 — Campaign card flow + Video campaign + per-segment image naming

## Live URL
https://carwow-ai-optimiser.vercel.app

## Current Status
- [x] Frontend-only Next.js demo created
- [x] 6 demo campaigns total:
  - `demo-rsa`          — EV Switch — RSA Copy
  - `demo-images-young` — EV Switch — Display Images — Younger Driver (18-30)
  - `demo-images-peak`  — EV Switch — Display Images — EV Adoption Peak (35-54)
  - `demo-images-older` — EV Switch — Display Images — Older Driver (60+)
  - `demo-landing`      — EV Switch — Landing Page
  - `demo-video`        — EV Switch — Video (NEW)
- [x] Campaign cards → link to /campaign/new?demo=[id] (pre-filled form flow)
- [x] New Campaign form: pre-fills name+brief from campaign, locks asset type, redirects to exact campaign
- [x] + New button stays as blank form per section
- [x] Per-segment image naming (27 image slots):
  - Young: public/images/young-v[1-3]-[square|portrait|story].jpg
  - Peak:  public/images/peak-v[1-3]-[square|portrait|story].jpg
  - Older: public/images/older-v[1-3]-[square|portrait|story].jpg
- [x] Video campaign: 3 iterations, native HTML5 <video> player
  - Videos: public/videos/ev-video-v[1-3].mp4 (user to drop files here)
- [x] Auto-deploy: push to main → GitHub Actions → Vercel (~70s)
  - Fixed: was deploying to wrong project ("frontend") due to missing .vercel/project.json
  - Now uses VERCEL_ORG_ID + VERCEL_PROJECT_ID secrets → pull→build→deploy pattern

## Demo Flow (per campaign)
1. Dashboard: click campaign card → goes to New Campaign form (pre-filled)
2. User sees brief, hits "Create Campaign & Generate →"
3. 8s fake loading (step-by-step progress)
4. Redirects to correct campaign page → iteration 1 shown
5. "Run Focus Group & Iterate" → 7s loading → iteration 2
6. Repeat → iteration 3 → "All complete"

## Image Files to Drop
Place these files in `frontend/public/images/`:
- young-v1-square.jpg, young-v1-portrait.jpg, young-v1-story.jpg
- young-v2-square.jpg, young-v2-portrait.jpg, young-v2-story.jpg
- young-v3-square.jpg, young-v3-portrait.jpg, young-v3-story.jpg
- peak-v1-square.jpg, peak-v1-portrait.jpg, peak-v1-story.jpg
- peak-v2-square.jpg, peak-v2-portrait.jpg, peak-v2-story.jpg
- peak-v3-square.jpg, peak-v3-portrait.jpg, peak-v3-story.jpg
- older-v1-square.jpg, older-v1-portrait.jpg, older-v1-story.jpg
- older-v2-square.jpg, older-v2-portrait.jpg, older-v2-story.jpg
- older-v3-square.jpg, older-v3-portrait.jpg, older-v3-story.jpg

## Video Files to Drop
Place these files in `frontend/public/videos/`:
- ev-video-v1.mp4
- ev-video-v2.mp4
- ev-video-v3.mp4

## Infrastructure
- GitHub: https://github.com/javierchamorrowolters/carwow-ai-optimiser
- Vercel project ID: prj_MzA0mzKPa4z4xBgemFjVkguW7eEh
- Vercel team: javierchamu-gmailcoms-projects / team_nYtC9BOAvkXF9dwE0hByrM1o
- Vercel token: stored in GitHub secret VERCEL_TOKEN and in Claude memory only
- GitHub Actions secret: VERCEL_TOKEN (set)
