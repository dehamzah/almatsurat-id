/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
    test: {
        // Exclude end-to-end tests and dependencies to prevent Vitest from running them
        exclude: ['tests/**/*', 'node_modules/**/*'],
    },
});
