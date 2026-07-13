const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
require('dotenv').config();


test.describe('Hybrid API + UI', () => {


test('Create user via API then login via UI', async ({ page, request }) => {

  const email = `rafiahaider${Date.now()}@test.com`;
  const password = process.env.TEST_PASSWORD;

  const response = await request.post('https://automationexercise.com/api/createAccount', {
    multipart: {
      name: 'Test User',
      email: email,
      password: password,
      title: 'Mr',
      birth_date: '5',
      birth_month: '6',
      birth_year: '2000',
      firstname: 'Test',
      lastname: 'User',
      company: 'Test Co',
      address1: '123 Test Street',
      address2: '',
      country: 'India',
      zipcode: '12345',
      state: 'Test State',
      city: 'Test City',
      mobile_number: '03001234567'
    }
  });


  // BUG: API docs specify 201 but server returns 200 
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.message).toBe('User created!');

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(loginPage.loggedInText).toBeVisible();
});

})