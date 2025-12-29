import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/about/',
  '/dzikir-pagi-sughro/',
  '/dzikir-pagi-kubro/',
  '/dzikir-petang-sughro/',
  '/dzikir-petang-kubro/',
];

for (const route of routes) {
  test(`should navigate to ${route} successfully`, async ({ page }) => {
    await page.goto(route);
    
    // Check for title presence
    // Index: Al Ma'tsurat - Dzikir Pagi dan Petang
    // About: Tentang Aplikasi
    // Slug: Al Ma'tsurat [Mode] [Size]
    await expect(page).toHaveTitle(/Ma'tsurat|Tentang/i);

    // Ensure main content is visible (basic check that the page rendered)
    await expect(page.locator('main').first()).toBeVisible();
  });
}
