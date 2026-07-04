const {test, expect} = require('@playwright/test')

const {LoginPage} = require('../pages/LoginPage')
const {RegisterPage} = require('../pages/RegisterPage')
const {SignupPage} = require('../pages/SignupPage')
const { Sign } = require('node:crypto')

test('User can regiter a new Account',async({page}) =>{
    const email = `testuser${Date.now()}@test.com`;

    const loginPage = new LoginPage(page)
    await loginPage.goto();

    const signupPage = new SignupPage(page)
    await signupPage.signup('Rafia Haider', email)

    const registerPage = new RegisterPage(page);
    await registerPage.fillform({
        gender:    'Mr',
        password:  'Test@1234',
        day:       '5',
        month:     '6',
        year:      '2000',
        firstName: 'Rafia',
        lastName:  'Haider',
        address:   '123 Test Street',
        country:   'India',      
        state:     'Test State',
        city:      'Test City',
        zipcode:   '12345',
        mobile:    '03001234567'

    })

    await expect(page.getByText('Account Created!')).toBeVisible();
})