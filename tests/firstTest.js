const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const productTitle = await page.isVisible('.title');
  console.log(`Products title is displayed: ${productTitle}`);

  const shoppingCartIcon = await page.isVisible('.shopping_cart_link');
  console.log(`Shopping Cart icon is displayed: ${shoppingCartIcon}`);

  const productCount = await page.$$eval('.inventory_item', items => items.length);
  const moreThanOneProduct = productCount > 1;
  console.log(`More than 1 product is displayed: ${moreThanOneProduct}`);

  await browser.close();
})();
