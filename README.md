# Yet Another Tests

This project contains automated tests using Playwright and Mocha for the Sauce Demo website.

## Project Structure

- `tests/`: Contains the test files.
  - `firstTest.js`: Test for performing login and verifying elements on the page.
  - `secondTest.js`: Test for adding a product to the cart and verifying the cart contents.
- `package.json`: Contains the project dependencies and scripts.
- `mocha.opts`: Configuration file for Mocha.
- `README.md`: This file.

## Setup

### 1. Install Dependencies

Make sure you have Node.js installed. Then, install the necessary dependencies:

npm install
npx playwright install

2. Run the Tests
You can run all the tests or individual tests using npm scripts defined in the package.json.
 
To run all tests, use: npm test

To run only the login test: npm run test-login
To run only the cart test: npm run test-cart

Test Descriptions

Test 1: Perform Login (firstTest.js)
This test performs the following actions:

1 Logs in using the credentials standard_user and secret_sauce.
2 Verifies that the "Products" title is displayed.
3 Verifies that the Shopping Cart icon is displayed.
4 Verifies that more than one product is displayed on the page.

Test 2: Add Product to the Cart (secondTest.js)
This test performs the following actions:

1 Logs in using the credentials standard_user and secret_sauce.
2 Adds the first product to the cart.
3 Verifies that the Shopping Cart icon shows the number of products added (should be 1).
4 Opens the Shopping Cart and verifies that the added product is displayed.
5 Removes the product from the cart.
6 Verifies that no products are available in the Shopping Cart.

## Notes
The tests are designed to run with the Chromium browser by default. You can change the browser in the test files if needed.
Ensure that you have a stable internet connection while running the tests as they interact with the live website.