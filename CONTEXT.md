# Architectural Context & Decisions

## Service Worker & PWA Update Strategy

### Context
Previously, the PWA used `registerType: 'prompt'`, displaying an "Update Tersedia" toast UI with action buttons whenever a new Service Worker build was available.

### Problem
Prompting users to manually click "Update" and reload the page disrupts their Dhikr reading sessions and forces unnecessary UI interactions.

### Decision
Transition the PWA update strategy from manual prompt-based updates to automatic background updates (`registerType: 'autoUpdate'`).

### Configuration & Implementation
- **Configuration**:
  - `registerType: 'autoUpdate'` in `astro.config.mjs`.
  - `workbox.skipWaiting: true` to force newly installed service workers to take over immediately.
  - `workbox.clientsClaim: true` to allow active service workers to claim control of all clients immediately.
- **Triggers**:
  - Periodic background check every 1 hour (`registration.update()`).
  - Update check when switching back to the app tab (`visibilitychange` listener).
- **UX Refactor**:
  - Removed "Update Tersedia" toast modal and reload action buttons from `src/components/PwaToast.svelte`.
  - Maintained the "Siap Offline" notification toast to inform first-time users that offline capabilities are ready.
