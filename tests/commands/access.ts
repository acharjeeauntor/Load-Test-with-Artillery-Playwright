import { Page, expect } from '@playwright/test';

export async function accessGetStarted(page:Page) {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();   
}

export async function verifyTitle(page:Page) {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/); 
}