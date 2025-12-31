// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import { visualizer } from "rollup-plugin-visualizer";
import AstroPWA from '@vite-pwa/astro'
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://almatsurat.id',
    trailingSlash: 'always',
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: false,
                filename: "stats.html",
            }),
        ],
        esbuild: {
            legalComments: 'none',
        },
    },
    integrations: [
        sentry({
            project: process.env.SENTRY_PROJECT,
            org: process.env.SENTRY_ORG,
            authToken: process.env.SENTRY_AUTH_TOKEN,
            telemetry: false,
        }),
        svelte(),
        sitemap(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
        AstroPWA({
            registerType: 'prompt',
            injectRegister: null,
            manifest: false,
            devOptions: {
                enabled: true,
            },
            workbox: {
                globPatterns: ['**/*.{html,js,css,ico,png,svg,webmanifest,json,woff,woff2}']
            }
        })
    ],
});