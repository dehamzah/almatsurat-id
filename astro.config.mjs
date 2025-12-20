// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import { visualizer } from "rollup-plugin-visualizer";
import AstroPWA from '@vite-pwa/astro'
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://almatsurat.id',
    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: false,
                filename: "stats.html",
            }),
        ],
    },
    integrations: [
        svelte(),
        sitemap(),
        AstroPWA({
            registerType: 'prompt',
            injectRegister: null,
            manifest: false,
            devOptions: {
                enabled: true,
            },
            workbox: {
                globPatterns: ['**/*.{html,js,css,ico,png,svg,webmanifest,json,woff,woff2,mpeg,mp3}']
            }
        })
    ],
});