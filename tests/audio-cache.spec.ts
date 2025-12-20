import { test, expect } from '@playwright/test';

test.describe('Audio Caching Feature', () => {
    test('should enable caching, cache audio on play, and clear cache', async ({ page }) => {
        // 1. Go to a page with audio player
        await page.goto('/dzikir-pagi-sughro');
        await page.waitForLoadState('networkidle');

        // 2. Open Settings
        await page.getByTestId('settings-trigger').click();

        // Check if modal opened
        await expect(page.getByRole('heading', { name: 'Pengaturan' })).toBeVisible({ timeout: 5000 });

        // 3. Enable "Simpan Audio"
        const toggle = page.getByTestId('audio-cache-toggle');
        await expect(toggle).toBeVisible();
        
        // It should be off by default
        await expect(toggle).toHaveAttribute('aria-checked', 'false');
        
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-checked', 'true');

        // Close Settings
        await page.getByRole('button', { name: /close/i }).click();

        // 4. Play Audio
        const playButton = page.getByTestId('audio-player-button');
        await expect(playButton).toBeVisible();
        await playButton.click();

        // 5. Verify Cache Population
        // This might take a moment as it is network request
        // We can poll the cache size using page.evaluate
        await expect.poll(async () => {
             return await page.evaluate(async () => {
                 const cacheName = 'almatsurat-audio-cache-v1';
                 if (!('caches' in window)) return 0;
                 const cache = await caches.open(cacheName);
                 const keys = await cache.keys();
                 return keys.length;
             });
        }, { timeout: 10000 }).toBeGreaterThan(0);

        // Stop audio
        await playButton.click(); // Using same button to toggle off

        // 6. Verify Cache Size in Settings
        await page.getByTestId('settings-trigger').click();
        
        // The "Hapus Cache" button should show size > 0 MB
        const cacheSizeText = page.getByTestId('cache-size-text');
        await expect(cacheSizeText).not.toHaveText('0 MB');

        // 7. Clear Cache
        const clearButton = page.getByTestId('clear-cache-button');
        await clearButton.click();

        // Verify size goes back to 0 MB
        await expect(cacheSizeText).toHaveText('0 MB');
        
        // Verify in storage
        const keyCount = await page.evaluate(async () => {
             const cacheName = 'almatsurat-audio-cache-v1';
             if (!('caches' in window)) return 0;
             const cache = await caches.open(cacheName);
             const keys = await cache.keys();
             return keys.length;
        });
        expect(keyCount).toBe(0);
    });
});
