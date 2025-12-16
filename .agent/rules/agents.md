---
trigger: always_on
---

# Project Guidelines for Agents

## Project Overview
**Name**: `almatsurat-astro`
**Goal**: Al-Matsurat application built with Astro, focusing on performance, SEO, and a clean modern UI.
**Key Features**:
- Morning and Evening Dhikr readings.
- Settings for toggling translation, transliteration, and other display preferences.
- Persistent user settings.

## Tech Stack
- **Framework**: [Astro v5](https://astro.build)
- **UI Library**: [React v19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) (for shared state across Astro Islands)
- **Icons**: [Lucide React](https://lucide.dev)
- **Runtime/Package Manager**: [Bun](https://bun.sh)
- **Language**: TypeScript (Strict mode)

## Directory Structure
- `src/pages`: Astro file-based routing.
- `src/layouts`: Astro layout components (e.g., `Layout.astro`).
- `src/components`: React components (UI elements, interactive islands) and Astro components.
- `src/store`: Nanostores state definitions.
- `src/data`: Static data files (e.g., Dhikr content).
- `src/types.ts`: Shared TypeScript definitions.

## Development Rules

### Code Style
- **TypeScript**: Use strict typing. Avoid `any`. Interfaces over Types for object shapes.
- **Components**: Use Functional Components with Hooks.
- **Styling**: Use Tailwind CSS utility classes. Avoid custom CSS files unless absolutely necessary.
- **State**: Use React state for local component state. Use Nanostores for global/shared state (e.g., Settings).

### Clean Code Guidelines
- **Single Responsibility**: Each component should do one thing well. Extract complex logic into custom hooks or utility functions.
- **Naming Conventions**:
  - Variables/Properties: camelCase, descriptive (e.g., `isVisible`, `dhikrList`).
  - Components: PascalCase (e.g., `SettingsModal`).
  - Functions: verbNoun (e.g., `handleSave`, `fetchData`).
- **DRY (Don't Repeat Yourself)**: Extract repeated logic or UI patterns into reusable components or helper functions.
- **File Structure**: Keep related files together. Use barrel files (`index.ts`) sparingly and only when it simplifies imports significantly.
- **Comments**: Write self-documenting code. Use comments to explain *why* something is done, not *what* is done.
- **Early Returns**: Use early returns to avoid deep nesting of conditionals.

### Astro Specifics
- **Islands Architecture**: Use `client:*` directives strictly where interactivity is needed (e.g., `client:load`, `client:visible`).
- **SSG**: The site is static. Avoid server-side only logic that requires a Node runtime unless creating an API endpoint / adapter is configured.

### Package Management
- Use `bun` for installing dependencies and running scripts.
  - Install: `bun add <package>`
  - Run Dev: `bun run dev`
  - Build: `bun run build`
