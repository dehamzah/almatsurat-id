---
trigger: always_on
---

# Project Guidelines for Agents

## Project Overview
- **Name**: `almatsurat-id`
- **Goal**: Al-Matsurat application built with Astro, focusing on performance, SEO, and a clean modern UI.
- **Key Features**:
    - Morning and Evening Dhikr readings with Audio recitation.
    - Dhikr counter and persistent progress tracking.
    - Fully offline-capable Progressive Web App (PWA).
    - Dark mode support and customizable display settings (Translation, Transliteration).
    - Comprehensive error tracking and analytics.

## Tech Stack
- **Framework**: [Astro v5](https://astro.build)
- **UI Library**: [Svelte v5](https://svelte.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) (for shared state across Astro Islands)
- **Icons**: [Lucide Svelte](https://lucide.dev)
- **Runtime/Package Manager**: [Bun](https://bun.sh)
- **Error Tracking**: [Sentry](https://sentry.io) (`@sentry/astro`)
- **Analytics**: Google Analytics via [Partytown](https://partytown.builder.io/) (`@astrojs/partytown`)
- **PWA**: [Vite PWA](https://vite-pwa-org.netlify.app/)
- **Language**: TypeScript (Strict mode)

## Directory Structure
- `src/pages`: Astro file-based routing.
- `src/layouts`: Astro layout components (e.g., `Layout.astro`).
- `src/components`: Svelte components (UI elements, interactive islands) and Astro components.
- `src/store`: Nanostores state definitions.
- `src/data`: Static data files (e.g., Dhikr content).
- `src/utils`: Utility functions and helpers.
- `src/styles`: Global styles and Tailwind configuration.
- `src/assets`: Static assets like images and audio.
- `src/types.ts`: Shared TypeScript definitions.

## Development Rules

### Code Style
- **TypeScript**: Use strict typing. Avoid `any`. Interfaces over Types for object shapes.
- **Components**: Use Svelte 5 components (Runes syntax).
- **Styling**: Use Tailwind CSS utility classes. Avoid custom CSS files unless absolutely necessary.
- **State**: Use Svelte state (Runes) for local component state. Use Nanostores for global/shared state.

### Clean Code Guidelines
- **Single Responsibility**: Each component should do one thing well. Extract complex logic into reusable functions.
- **Naming Conventions**:
  - Variables/Properties: camelCase, descriptive (e.g., `isVisible`, `dhikrList`).
  - Components: PascalCase (e.g., `SettingsModal`).
  - Functions: verbNoun (e.g., `handleSave`, `fetchData`).
- **DRY**: Extract repeated logic or UI patterns into reusable components or helper functions.
- **File Structure**: Keep related files together. Use barrel files (`index.ts`) sparingly.
- **Comments**: Write self-documenting code. Use comments to explain *why* something is done.
- **Early Returns**: Use early returns to avoid deep nesting of conditionals.

### Astro Specifics
- **Islands Architecture**: Use `client:*` directives strictly where interactivity is needed.
- **SSG**: The site is static. Avoid server-side only logic unless using an adapter.

### Package Management
- Always use `bun` for installing dependencies and running scripts.
  - Install: `bun add <package>`
  - Run Dev: `bun run dev`
  - Build: `bun run build`
  - Check: `bun run check`
  - Test: `bun run test`