import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('[1] addProduct', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.addProduct('Red Lipstick');
  // END
});

test('[2] open', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.open();
  // END
});

test('[3] removeProduct', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.removeProduct('Red Lipstick');
  // END
});

test('[4] clear', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.clear();
  // END
});

