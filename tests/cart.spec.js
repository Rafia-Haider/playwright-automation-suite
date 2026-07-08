const { test, expect } = require("@playwright/test")
const {SearchPage} = require("../pages/SearchPage")
const {CartModal} = require("../pages/CartModal")
const {CartPage } = require("../pages/CartPage")

test("Product shows in cart after adding", async({page})=>{
    const searchPage = new SearchPage(page);
    const cartModal = new CartModal(page);
    const cartPage = new CartPage(page);

    await searchPage.goto();
    await searchPage.searchFor("Blue Top");
    await searchPage.addProductToCart("Blue Top")
    await cartModal.continueShopping();

    await cartPage.goto();
    const productNames = await cartPage.getCartProductNames();
    expect(productNames.some(name => name.includes("Blue Top"))).toBeTruthy();
})