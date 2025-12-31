# PWA & Offline Capability Documentation

This document explains the Progressive Web App (PWA) setup for the Al-Matsurat ID project, specifically focusing on how offline capabilities and update notifications are implemented.

## Overview

The project uses **Offline functionality** via Service Workers to allow users to access Dhikr readings even without an internet connection. The implementation relies on:

1.  **`@vite-pwa/astro` Integration**: Handles Service Worker generation during the Astro build process.
2.  **`vite-plugin-pwa`**: Core dependency for types and virtual module resolution.
3.  **Astro SSG**: The site is statically generated, so the Service Worker must cache the generated HTML files.

## Configuration

The PWA configuration is located in `astro.config.mjs`.

### Key Settings

```javascript
// astro.config.mjs
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
    // ...
    integrations: [
        AstroPWA({
            // 'prompt' allows us to control the update UX (e.g., show a toast)
            // instead of silently updating in the background ('autoUpdate').
            registerType: 'prompt', 

            // Prevent automatic script injection because we handle it manually
            // in our PwaToast.svelte component for better UI control.
            injectRegister: null, 

            workbox: {
                // Critical: Includes HTML, SVG, JSON, and WebManifest in the cache.
                // Standard Vite PWA config often misses these in SSG builds.
                globPatterns: ['**/*.{html,js,css,ico,png,svg,webmanifest,json,woff,woff2,mpeg,mp3}']
            }
        })
    ]
})
```

### Why `@vite-pwa/astro` instead of `vite-plugin-pwa`?
Standard `vite-plugin-pwa` generates the Service Worker during the Vite build phase. Astro generates static HTML files *after* the Vite build. This causes a race condition where `index.html` and other pages are missing from the SW cache.
The `@vite-pwa/astro` integration hooks into `astro:build:done` event, ensuring the Service Worker is generated **after** all static pages are built, guaranteeing complete offline support.

## UI Implementation

The UI logic resides in `src/components/PwaToast.svelte`.

### `PwaToast.svelte`
This component is mounted in `src/layouts/Layout.astro` with `client:load` to ensure it hydrates immediately.

**Responsibilities:**
1.  **Registration**: Calls `registerSW` from `virtual:pwa-register`.
2.  **Offline Ready**: Listens for `onOfflineReady` event to show a "Siap Offline" (Ready for Offline) toast.
3.  **Update Prompt**: Listens for `onNeedRefresh` event to show an "Update Tersedia" toast with an "Update" button needed since we use `registerType: 'prompt'`.

## Workbox & Caching
The Service Worker uses **Workbox** under the hood. It uses a **Precache First** strategy for assets defined in `globPatterns`.

-   **Precached**: HTML pages, CSS, JS, Images, Fonts, Audio.
-   **Navigation Fallback**: Maps navigation requests to `index.html` (though in SSG, it mostly serves the precached HTML for the specific route).

## Troubleshooting

**Problem**: "App doesn't load offline"
**Check**:
1.  Open DevTools -> Application -> Service Workers. Is it activated?
2.  Open Cache Storage. Check if `index.html` or the specific page path (e.g., `/dzikir-pagi`) is listed.
3.  Verify `astro.config.mjs` has the correct `globPatterns`.

**Problem**: "Update toast doesn't appear"
**Check**:
1.  Are you testing in a new browser/incognito? PWA updates require a *change* in the build assets.
2.  Ensure `registerType` is set to `'prompt'`.
