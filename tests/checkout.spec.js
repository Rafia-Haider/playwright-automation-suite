const { test, expect } = require('@playwright/test');
require('dotenv').config();
const { LoginPage }   = require('../pages/LoginPage');
const { PaymentPage } = require('../pages/PaymentPage');

test('User can complete purchase with payment', async ({ page }) => {
    test.skip(!!process.env.CI, 'Skipped in CI — ad overlays intercept clicks in headless environment');
    
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);
    await expect(loginPage.loggedInText).toBeVisible();

    await page.goto('https://automationexercise.com/product_details/1');
    await page.locator('.cart').click();

    await page.goto('https://automationexercise.com/view_cart');
    await page.locator('.check_out').click();

    await page.goto('https://automationexercise.com/checkout');
    await page.locator('.check_out').click();

    const paymentPage = new PaymentPage(page);
    await paymentPage.fillPayment({
        name:        'Rafia Haider',
        cardNumber:  '4111111111111111',
        cvc:         '311',
        expiryMonth: '09',
        expiryYear:  '2027'
    });

    await expect(page.getByTestId('order-placed')).toBeVisible();
});