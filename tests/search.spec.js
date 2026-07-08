const {test,expect} = require('@playwright/test')
const {SearchPage} = require("../pages/SearchPage")

test("User can search a product",async({page})=>{
    const searchPage= new SearchPage(page);

    await searchPage.searchFor("Blue Top");

    const names = await searchPage.getProductNames();
    await expect(names.some(name => name.includes('Blue Top'))).toBeTruthy();
})