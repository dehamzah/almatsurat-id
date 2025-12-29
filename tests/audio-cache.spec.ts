import { test, expect } from '@playwright/test';

test.describe('Audio Caching Feature', () => {
    test('should download specific audio, cache it, and show downloaded status', async ({ page }) => {
        // 1. Go to a page with audio player
        await page.goto('/dzikir-pagi-sughro/');
        await page.waitForLoadState('networkidle');

        // 2. Open Settings
        await page.getByTestId('settings-trigger').click();

        // Check if modal opened
        await expect(page.getByRole('heading', { name: 'Pengaturan' })).toBeVisible({ timeout: 5000 });

        // 3. Find "Dzikir Pagi Sughro" in the list and download
        const trackRow = page.getByTestId('audio-track-pagi-sughro');
            
        // Wait for the row to be visible first
        await expect(trackRow).toBeVisible();

        // Initial state: Download button should be visible
        const downloadBtn = trackRow.getByTitle('Unduh audio');
        await expect(downloadBtn).toBeVisible();

        // Click download
        await downloadBtn.click();

        // 4. Verify Download Progress/Completion
        // It might be fast, so we might see "Mengunduh..." or straight to "Tersimpan"
        // Let's wait for "Tersimpan" (Cached) status
        // The trash icon implies it is cached
        const deleteBtn = trackRow.getByTitle('Hapus audio');
        await expect(deleteBtn).toBeVisible({ timeout: 15000 }); // Give it time to download

        // Close Settings
        await page.getByTestId('settings-close-button').click();

        // 5. Play Audio
        const playButton = page.getByTestId('audio-player-button');
        await expect(playButton).toBeVisible();
        await playButton.click();

        // 6. Verify Cache Population via script
        await expect.poll(async () => {
             return await page.evaluate(async () => {
                 const cacheName = 'almatsurat-audio-cache-v1';
                 if (!('caches' in window)) return 0;
                 const cache = await caches.open(cacheName);
                 const keys = await cache.keys();
                 return keys.length;
             });
        }, { timeout: 5000 }).toBeGreaterThan(0);

        // Stop audio
        await playButton.click();

        // 7. Verify Cache Size in Settings and Delete
        await page.getByTestId('settings-trigger').click();
        
        // Delete the audio
        await deleteBtn.click();
        
        // Should revert to download button
        await expect(downloadBtn).toBeVisible();

        // 8. Clear all cache just to be sure (optional, but good for cleanup)
        // Check if "Hapus Semua Audio" is visible or not
        // If cache empty, it shouldn't show (or show 0 MB depending on logic, but we added logic to hide/disable)
        // logic: if cacheSize !== '0 MB'
        
        // Since we deleted the only file, it should be 0 MB and the button should be gone or not "Hapus Semua"
        // Let's verify via script that cache is empty
         const keyCount = await page.evaluate(async () => {
             const cacheName = 'almatsurat-audio-cache-v1';
             if (!('caches' in window)) return 0;
             const cache = await caches.open(cacheName);
             const keys = await cache.keys();
             return keys.length;
        });
        expect(keyCount).toBe(0);
    });

    test('should maintain playback position when paused (cached audio)', async ({ page }) => {
        // 1. Go to page
        await page.goto('/dzikir-pagi-sughro/');
        await page.waitForLoadState('networkidle');

        // 2. Ensure downloaded (Using cached audio)
        // Check if download button is there, if so click it
        // Or simpler: check if "Tersimpan" is there. Use the logic from previous test or assumes state?
        // Playwright tests usually start fresh unless configured otherwise.
        
        const trackRow = page.getByTestId('audio-track-pagi-sughro');
        await page.getByTestId('settings-trigger').click();
        
        // Wait for settings
        await expect(page.getByRole('heading', { name: 'Pengaturan' })).toBeVisible();

        // Check status
        const downloadBtn = trackRow.getByTitle('Unduh audio');
        const count = await downloadBtn.count();
        if (count > 0 && await downloadBtn.isVisible()) {
             await downloadBtn.click();
             await expect(trackRow.getByTitle('Hapus audio')).toBeVisible({ timeout: 15000 });
        }
        
        // Close settings
        await page.getByTestId('settings-close-button').click();

        // 3. Play Audio
        const playButton = page.getByTestId('audio-player-button');
        await playButton.click();

        // 4. Wait for some playback (e.g. 3 seconds)
        await page.waitForTimeout(3000);

        // 5. Pause
        await playButton.click();

        // 6. Check currentTime > 2
        const currentTimeAtPause = await page.evaluate(() => {
            const audio = document.querySelector('audio');
            return audio ? audio.currentTime : 0;
        });
        
        expect(currentTimeAtPause).toBeGreaterThan(2);

        // 7. Play again
        await playButton.click();
        
        // 8. Immediately check currentTime
        const currentTimeResumed = await page.evaluate(() => {
            const audio = document.querySelector('audio');
            return audio ? audio.currentTime : 0;
        });

        // Should be greater or equal to where we paused (allowing for slight delay/progress)
        // Definitely should NOT be close to 0 (unless we paused at 0 which we didn't)
        expect(currentTimeResumed).toBeGreaterThanOrEqual(currentTimeAtPause);
    });
});
