// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: false,
                filename: "stats.html",
            })
        ],
    },
    integrations: [svelte()],
});
