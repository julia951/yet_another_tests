const { chromium } = require('playwright');
const assert = require('assert');

describe('Add product to the cart', function () {
  this.timeout(10000); 

  let browser, context, page;

  before(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('should login, add product to cart, and verify', async () => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button:has-text("Add to cart")');

    const cartBadgeText = await page.textContent('.shopping_cart_badge');
    assert.strictEqual(cartBadgeText, '1', 'Cart badge does not show 1');

    await page.click('.shopping_cart_link');

    const cartItem = await page.isVisible('.cart_item');
    assert.strictEqual(cartItem, true, 'Product is not displayed in the cart');

    const productName = await page.textContent('.inventory_item_name');
    const cartProductName = await page.textContent('.cart_item .inventory_item_name');
    assert.strictEqual(productName, cartProductName, 'Product name in cart does not match product added');

    await page.click('.cart_item button:has-text("Remove")');

    const cartEmpty = await page.$('.cart_item') === null;
    assert.strictEqual(cartEmpty, true, 'Products are still in the cart');
  });
});
