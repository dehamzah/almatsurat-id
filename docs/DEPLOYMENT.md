# Deployment Guide

This document outlines the deployment process for `almatsurat-id`. The application is an Astro static site deployed to Cloudflare Workers.

## Overview

- **Hosting Platform**: Cloudflare Workers
- **Deployment Strategy**: Automated via GitHub Actions (`ci.yml`) on GitHub Releases.
- **Build Tool**: Bun & Astro (`bun run build`)
- **Infrastructure as Code**: Wrangler (`wrangler.jsonc`)

## Deployment Environments

- **Production**: Deployed automatically when a new GitHub Release is published.

## CI/CD Pipeline

The Continuous Integration and Continuous Deployment (CI/CD) pipeline is defined in `.github/workflows/ci.yml`.

### Workflow Triggers
- **Push & Pull Requests** to `main`: Triggers the CI checks (Type Check, Unit Tests, Build, E2E Tests).
- **Release (Published)**: Triggers the full CI suite and, if successful, the **Deploy** job.

### Pipeline Stages
1. **Type Check**: Runs `bun run check` (Astro & Svelte checks).
2. **Unit Tests**: Runs `bun run test` (Vitest).
3. **Build**: Compiles the Astro project into static assets in the `dist/` directory using `bun run build`. Requires specific environment variables (see below).
4. **E2E Tests**: Runs Playwright end-to-end tests against the built artifacts.
5. **Deploy**: Only runs on release. Deploys the `dist/` folder to Cloudflare Pages using Wrangler.

## Release Process

This project follows a structured release workflow. Production deployments are **only** triggered when a new GitHub Release is published with a version tag (e.g., `v2.0.3`). Follow these steps to release a new version:

### 1. Prepare the Release
First, you need to document the changes and increment the version number locally.

1.  **Update `CHANGELOG.md`**:
    - Move all entries from the `[Unreleased]` section to a new version header.
    - Format: `## [X.Y.Z] - YYYY-MM-DD` (e.g., `## [2.0.3] - 2026-05-01`).
    - We follow the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) standard.

2.  **Bump Version in `package.json`**:
    - Update the `"version"` field in `package.json`.
    - **Tip**: You can use `bun version --patch`, `bun version --minor`, or `bun version --major` to do this automatically.

3.  **Commit and Push**:
    ```bash
    git checkout -b release/v2.0.3
    git add package.json CHANGELOG.md
    git commit -m "chore: bump version to 2.0.3"
    git push origin release/v2.0.3
    ```

### 2. Pull Request and Merge
All releases should be reviewed via a Pull Request.

1.  Open a Pull Request from your release branch to `main`.
2.  Wait for the **CI Pipeline** to finish (Type checks, Tests, and Build must pass).
3.  Once approved and CI is green, merge the PR into `main`.

### 3. Publish the Release (Triggers Deployment)
The final step triggers the automated deployment to Cloudflare.

1.  Go to the **Releases** section on GitHub.
2.  Click **Draft a new release**.
3.  **Choose a tag**: Create a new tag matching the version, prefixed with `v` (e.g., `v2.0.3`).
4.  **Target**: Ensure the target is set to the `main` branch.
5.  **Release title**: Use the version number (e.g., `2.0.3`).
6.  **Description**: Copy and paste the corresponding section from your `CHANGELOG.md`.
7.  Click **Publish release**.

> [!IMPORTANT]
> Publishing the release will automatically trigger the production deployment job in the GitHub Actions workflow. You can monitor the progress in the **Actions** tab.
