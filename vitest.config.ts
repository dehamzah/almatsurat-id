/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
    // @ts-expect-error - 'test' property is present in Vitest config but missing in Astro's UserConfig type
    test: {
        // Exclude end-to-end tests and dependencies to prevent Vitest from running them
        exclude: ['tests/**/*', 'node_modules/**/*'],
    },
});
