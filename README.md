# almatsurat-astro

> A high-performance, SEO-friendly Al-Matsurat application built with Astro and Svelte.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/astro-v5.0-orange.svg)
![Svelte](https://img.shields.io/badge/svelte-v5.0-orange.svg)

**Live Site:** [https://almatsurat.id](https://almatsurat.id)

## 📖 Overview

**almatsurat-astro** is a modern web application dedicated to the Morning and Evening Dhikr (Al-Matsurat). It leverages the power of [Astro](https://astro.build) for static site generation (SSG) to ensure lightning-fast load times and excellent SEO, combined with [Svelte 5](https://svelte.dev) for a reactive and interactive user interface.

## ✨ Key Features

- **Morning & Evening Dhikr**: Dedicated sections for morning (Al-Ma'thurat Kubra/Sughra) and evening readings.
- **Customizable Reading Experience**:
  - Toggle **Translation** on/off.
  - Toggle **Transliteration** on/off.
- **Persistent Settings**: User preferences are saved automatically using [Nanostores](https://github.com/nanostores/nanostores) and local storage.
- **Modern UI/UX**: Clean, responsive design built with **Tailwind CSS**.
- **Dark Mode Support**: Optimized for reading in various lighting conditions.
- **PWA Capabilities**: (Planned/In-progress) Installable on devices for offline access.

## 🛠️ Tech Stack

This project uses a cutting-edge stack focused on performance and developer experience:

- **Framework**: [Astro v5](https://astro.build) - Content-driven static site generator.
- **UI Library**: [Svelte v5](https://svelte.dev) - For interactive "Islands" (Runes syntax).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework (via `@tailwindcss/vite`).
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) - framework-agnostic state manager for sharing state between Astro islands.
- **Runtime & PM**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime.
- **Icons**: [Lucide Svelte](https://lucide.dev).

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0 or later) is recommended.
- Node.js (v18+) (Alternative if not using Bun).

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dehamzah/almatsurat-astro.git
cd almatsurat-astro
bun install
```

### Running Locally

Start the development server:

```bash
bun dev
```

Visit `http://localhost:4321` to see the app.

## 📊 Analytics

This project supports Google Analytics (GA4). Analytics are enabled **only** when the `PUBLIC_GA_MEASUREMENT_ID` environment variable is set for production builds (e.g., Cloudflare Wrangler or your hosting provider). There is no UI toggle — analytics run when configured in production.

Privacy defaults & notes:

- We **ignore** Do Not Track (DNT) by design; the reason is that analytics are used **for product improvement only** (understand usage, prioritize features, and fix bugs).
- IPs are **anonymized** before being sent to Google (`gtag('config', GA_ID, { anonymize_ip: true })`). This reduces location precision while preserving useful aggregate metrics.

To enable in Cloudflare Workers (wrangler) set the `PUBLIC_GA_MEASUREMENT_ID` secret/config for your production environment.

## 🧞 Commands

All commands are run from the root of the project:

| Command         | Action                                                   |
| :-------------- | :------------------------------------------------------- |
| `bun dev`       | Starts local dev server at `localhost:4321`.             |
| `bun build`     | Build your production site to `./dist/`.                 |
| `bun preview`   | Preview your build locally.                              |
| `bun run audit` | Run Lighthouse performance audit (requires build first). |
| `bun run check` | Run `astro check` and `svelte-check` for type safety.    |
| `bun astro ...` | Run CLI commands like `astro add`, `astro check`.        |

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, fonts, favicon)
├── src/
│   ├── components/   # Svelte components (UI & Logic) & Astro components
│   ├── layouts/      # Astro layouts (Header, Footer wrappers)
│   ├── pages/        # Astro file-based routing
│   ├── store/        # Nanostores state definitions (settings.ts, etc.)
│   ├── data/         # Static content (Dhikr JSON/TS data)
│   └── icons/        # SVG icons (if extracted from lucide)
├── astro.config.mjs  # Astro configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## 🤝 Contributing

Contributions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
