// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import { visualizer } from "rollup-plugin-visualizer";

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
            })
        ],
    },
    integrations: [svelte(), sitemap()],
});