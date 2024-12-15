import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    await page.getByLabel('Sort By').selectOption('name');
    await page.waitForLoadState('networkidle');
});

test('User can sort items by Product Name', async ({ page }) => {
    const productNamesLocator = page.locator("//strong[@class='product name product-item-name']/a");

    const productNames = (await productNamesLocator.allTextContents()).map(name => name.trim());

    const sortedProducts = [...productNames].sort((a, b) => a.localeCompare(b));

    expect(productNames).toEqual(sortedProducts);
});


