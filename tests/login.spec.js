require('dotenv').config()

const {test,expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage');


test("user can login with valid credentials", async({page})=>{
    const loginPage = new LoginPage(page);

  await loginPage.goto();
  await expect(loginPage.loginHeading).toBeVisible();

  await loginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);

  await expect(loginPage.loggedInText).toBeVisible();
})