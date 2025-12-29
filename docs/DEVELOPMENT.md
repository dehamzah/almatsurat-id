# Development

This document provides a step-by-step guide for setting up and running the Al Matsurat ID project locally.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0 or later) is recommended.
- Node.js (v24+) (Alternative if not using Bun).
- [Mise](https://mise.run) (For managing environment variables).


### Environment Variables

You can add these optional environment variables to your `.env` file in order for the analytics and error tracking to work:

```bash
PUBLIC_SENTRY_DSN=your_sentry_dsn # Required for error tracking
SENTRY_PROJECT=your_sentry_project # Required for error tracking
SENTRY_ORG=your_sentry_org # Required for error tracking
SENTRY_AUTH_TOKEN=your_sentry_auth_token # Required for source map uploads during build
PUBLIC_GA_MEASUREMENT_ID=your_ga_id # Required for analytics
PUBLIC_GOOGLE_FORMS_URL=your_google_forms_url # Required for rendering the feedback form component
PUBLIC_GOOGLE_FORMS_PREFILLED_APP_VERSION_KEY=your_prefilled_key # Required for rendering the feedback form component
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dehamzah/almatsurat-id.git
cd almatsurat-id
bun install
```

### Running Locally

Start the development server:

```bash
bun run dev
```

Visit `http://localhost:4321` to see the app.

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `bun run dev` | Starts local dev server at `localhost:4321`. |
| `bun run build` | Build your production site to `./dist/`. |
| `bun run preview` | Preview your build locally. |
| `bun run audit` | Run Lighthouse performance audit (requires build first). |
| `bun run check` | Run `astro check` and `svelte-check` for type safety. |
| `bun run test` | Run unit tests with Vitest. |
| `bun run test:e2e` | Run end-to-end tests with Playwright. |
| `bun astro ...` | Run CLI commands like `astro add`, `astro check`. |

## 🧪 Testing

This project employs a robust testing strategy:

- **Unit Tests**: Powered by **Vitest**. useful for testing utility functions and individual logic units.
  ```bash
  bun run test
  ```
- **End-to-End (E2E) Tests**: Powered by **Playwright**. Ensures critical user flows (like navigation, settings toggles) work as expected across browsers.
  ```bash
  bun run test:e2e
  ```

## 📦 Deployment

This project is configured for deployment on **Cloudflare Workers**.

**Build and deploy the project**:
   ```bash
   bun run deploy
   ```
