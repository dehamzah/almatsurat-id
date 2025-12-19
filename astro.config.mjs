// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa'

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
            VitePWA({
                registerType: 'autoUpdate',
                injectRegister: 'auto',
                manifest: false,
                devOptions: {
                    enabled: true,
                },
                workbox: {
                    globPatterns: ['**/*.{js,css,ico,png,woff,woff2,mpeg,mp3}']
                }
            })
        ],
    },
    integrations: [svelte(), sitemap()],
});