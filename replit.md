# React + Vite + Express App

## Overview
A React single-page application with a TypeScript Express backend, using Google Gemini AI and Expo EAS integration. Built with Vite for the frontend bundler and Tailwind CSS for styling.

## Architecture
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS v4
- **Backend**: Express.js (TypeScript via tsx) serving as both API server and Vite dev middleware
- **AI**: Google Gemini API (`@google/genai`)
- **Mobile**: Expo / React Native (EAS integration via API routes)
- **Port**: 5000 (single server handles both API and frontend)

## Project Structure
```
/
├── server.ts          # Express server + Vite middleware
├── vite.config.ts     # Vite configuration
├── src/
│   ├── main.tsx       # React entry point
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   ├── services/      # API service modules
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── index.html         # HTML entry point
```

## Running the App
- **Dev**: `npm run dev` — starts the Express + Vite dev server on port 5000
- **Build**: `npm run build` — produces a `dist/` folder
- **Workflow**: "Start application" → `npm run dev` on port 5000

## Environment Variables
See `.env.example` for required variables:
- `GEMINI_API_KEY` — Google Gemini API key
- `APP_URL` — The hosted URL of the app
- `EXPO_TOKEN` — Expo EAS authentication token

## Deployment
Configured as `autoscale` deployment. Build: `npm run build`, Run: `node server.js`.
