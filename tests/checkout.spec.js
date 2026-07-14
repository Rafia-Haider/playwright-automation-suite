const { test, expect } = require('@playwright/test');
require('dotenv').config();
const { LoginPage }   = require('../pages/LoginPage');
const { PaymentPage } = require('../pages/PaymentPage');

test.describe('Checkout', () => {
    test('User can complete purchase with payment', async ({ page }) => {
        // Login
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);
        await expect(loginPage.loggedInText).toBeVisible();

        // Add product directly from product detail page
        await page.goto('https://automationexercise.com/product_details/1');
        await page.locator('.cart').click();

        // Go to cart and proceed to checkout
        await page.goto('https://automationexercise.com/view_cart');
        await page.locator('.check_out').click();

        // Place order on checkout page
        await page.goto('https://automationexercise.com/checkout');
        await page.locator('.check_out').click();
        await page.waitForURL('**/payment**');  

        // Fill payment
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
});