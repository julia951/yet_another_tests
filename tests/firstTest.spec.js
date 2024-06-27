const { test, expect } = require('@playwright/test');

test('Sauce Demo login test', async ({ page }) => {
  await page.goto('/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const productTitle = await page.isVisible('.title');
  console.log(`Products title is displayed: ${productTitle}`);
  expect(productTitle).toBe(true);

  const shoppingCartIcon = await page.isVisible('.shopping_cart_link');
  console.log(`Shopping Cart icon is displayed: ${shoppingCartIcon}`);
  expect(shoppingCartIcon).toBe(true);
});
