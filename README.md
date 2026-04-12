# Unified Learning — Frontend

React client for the **Unified Course Recommendation and Learning Decision Support System**: landing flow, AI-assisted course recommendations, history, dashboard (learning progress), profile, and feedback.

## Stack

- **React 19** + **Vite 7**
- **React Router 7**
- **Tailwind CSS 3**
- **lucide-react** for icons

## Prerequisites

- **Node.js** 18+ (20+ recommended for current tooling)
- The **FastAPI** backend running (default [http://127.0.0.1:8000](http://127.0.0.1:8000)) when you use recommendations, auth, history, and progress features

## Setup

```bash
cd unified-learning-frontend
npm install
cp .env.example .env   # optional; see below
```

## Environment variables

Defined in `.env.example`:

| Variable | When to set |
|----------|-------------|
| *(none)* | **Local dev (default):** leave `VITE_API_URL` unset. The app calls `/api/...` and Vite **proxies** to FastAPI (avoids CORS issues). |
| `VITE_PROXY_TARGET` | If the API is not on `http://127.0.0.1:8000`, set the full base URL (no trailing slash). |
| `VITE_API_URL` | **Ngrok / deployed backend:** full API base URL with no trailing slash. Use when the built app or dev session must talk to a remote API instead of the proxy. |

API base resolution is implemented in `src/lib/api.js`: dev without `VITE_API_URL` uses `/api`; production/preview builds without `VITE_API_URL` fall back to `http://127.0.0.1:8000`.

## Scripts

```bash
npm run dev      # Vite dev server (default http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint
```

## App routes

| Path | Description |
|------|-------------|
| `/` | Landing |
| `/recommendations` | Recommendation form and results |
| `/login`, `/signup` | Authentication |
| `/history` | Saved / past recommendations (requires login) |
| `/dashboard` | Learning progress (`/learningprogress` redirects here) |
| `/profile` | User profile (requires login) |
| `/feedback` | Feedback page (requires login) |
| `/course-feedback/:courseId` | Per-course feedback (requires login) |

## Backend pairing

Start the backend from `unified-learning-backend` (see that folder’s README), then run `npm run dev` here. Wait until Uvicorn logs **Application startup complete** before using recommendation flows.

If you change Vite env files, restart `npm run dev` so new values are picked up.
