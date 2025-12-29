# almatsurat-id

> A high-performance, SEO-friendly Al-Matsurat application built with Astro and Svelte.

**Live Site:** [https://almatsurat.id](https://almatsurat.id)

## 📖 Overview

**almatsurat-id** is a modern web application dedicated to the Morning and Evening Dhikr (Al-Matsurat). It leverages the power of [Astro](https://astro.build) for static site generation (SSG) to ensure lightning-fast load times and excellent SEO, combined with [Svelte 5](https://svelte.dev) for a reactive and interactive user interface.

## ✨ Key Features

- **Morning & Evening Dhikr**: Dedicated sections for morning (Al-Ma'thurat Kubra/Sughra) and evening readings.
- **Customizable Reading Experience**:
  - Toggle **Translation** on/off.
  - Toggle **Transliteration** on/off.
  - Configurable **Arabic font size**.
- **Persistent Settings**: User preferences are saved automatically to local storage.
- **Modern UI/UX**: Clean, responsive design built with **Tailwind CSS**.
- **Dark Mode Support**: Optimized for reading in various lighting conditions.
- **PWA Capabilities**: Installable on devices for offline access.

## 🛠️ Tech Stack

This project uses a cutting-edge stack focused on performance and developer experience:

- **Framework**: [Astro v5](https://astro.build) - Content-driven static site generator.
- **UI Library**: [Svelte v5](https://svelte.dev) - For interactive "Islands" (Runes syntax).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework (via `@tailwindcss/vite`).
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) - framework-agnostic state manager for sharing state between Astro islands.
- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime.
- **Error Tracking**: [Sentry](https://sentry.io) - Real-time error monitoring and debugging.
- **Analytics**: [Google Analytics 4](https://analytics.google.com) - Integrated via [Partytown](https://partytown.builder.io) for optimal performance.
- **Icons**: [Lucide Svelte](https://lucide.dev).

## 🤝 Contributing

Contributions are very welcome and greatly appreciated! To keep things smooth and collaborative, please follow these guidelines:

1. Run the Project Locally

    Before making changes, review [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for step-by-step instructions on setting up and running the project locally.

2. Discuss Before You Code

    Please open an issue first to discuss your idea, bug fix, or proposed change before submitting a pull request. This helps align expectations and avoids duplicated effort.
