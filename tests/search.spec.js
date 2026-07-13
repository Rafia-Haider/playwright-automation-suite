const { test, expect } = require('@playwright/test')
const { SearchPage } = require("../pages/SearchPage")

test.describe('Search', () => {


test("User can search a product", async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.goto();
    await searchPage.searchFor("Blue Top");

    const names = await searchPage.getProductNames();
    expect(names.some(name => name.includes('Blue Top'))).toBeTruthy();
})

test('Search with no matching results shows empty list', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.goto();
    await searchPage.searchFor('xyzxyzxyz123');
    await page.waitForURL('**/products?search=xyzxyzxyz123**');
    const count = await searchPage.getProductCount();
    expect(count).toBe(0);
});

})