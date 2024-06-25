const { test, expect } = require('@playwright/test');

test('Sauce Demo product display test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const productCount = await page.locator('.inventory_item').count();
  const moreThanOneProduct = productCount > 1;
  console.log(`More than 1 product is displayed: ${moreThanOneProduct}`);
  expect(moreThanOneProduct).toBe(true);
});
