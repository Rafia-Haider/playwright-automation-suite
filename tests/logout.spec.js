require('dotenv').config()

const {test, expect} = require("@playwright/test")
const {LoginPage} = require("../pages/LoginPage")

test("Logout is succesful", async({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);
    await loginpage.logout();
    await expect(loginpage.loginHeading).toBeVisible();
})