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
            // 'autoUpdate' enables background automatic updates without prompting
            // the user, ensuring uninterrupted Dhikr reading sessions.
            registerType: 'autoUpdate', 

            // Prevent automatic script injection because we handle it manually
            // in our PwaToast.svelte component.
            injectRegister: null, 

            workbox: {
                // Instantly activate new service worker and take control of clients
                skipWaiting: true,
                clientsClaim: true,
                // Critical: Includes HTML, SVG, JSON, and WebManifest in the cache.
                // Standard Vite PWA config often misses these in SSG builds.
                globPatterns: ['**/*.{html,js,css,ico,png,svg,webmanifest,json,woff,woff2}']
            }
        })
    ]
})
```

### Why `@vite-pwa/astro` instead of `vite-plugin-pwa`?
Standard `vite-plugin-pwa` generates the Service Worker during the Vite build phase. Astro generates static HTML files *after* the Vite build. This causes a race condition where `index.html` and other pages are missing from the SW cache.
The `@vite-pwa/astro` integration hooks into `astro:build:done` event, ensuring the Service Worker is generated **after** all static pages are built, guaranteeing complete offline support.

## UI Implementation & Background Triggers

The UI logic resides in `src/components/PwaToast.svelte`.

### `PwaToast.svelte`
This component is mounted in `src/layouts/Layout.astro` with `client:load` to ensure it hydrates immediately.

**Responsibilities:**
1.  **Registration & Update Triggers**: Calls `registerSW` from `virtual:pwa-register`. Automatically triggers `registration.update()` on:
    - Periodic 1-hour background interval.
    - Tab focus via `visibilitychange` event listener.
2.  **Offline Ready**: Listens for `onOfflineReady` event to show a "Siap Offline" (Ready for Offline) toast notification (auto-hides after 5 seconds).
3.  **Silent Updates**: Since `registerType` is set to `'autoUpdate'` with `skipWaiting` and `clientsClaim`, Service Worker updates activate silently in the background without showing update prompt toasts or forcing page refreshes during Dhikr recitation.

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

**Problem**: "Updates are not applying"
**Check**:
1.  Are you testing in a new browser/incognito? PWA updates require a *change* in the build assets.
2.  Ensure `registerType` is set to `'autoUpdate'`.

