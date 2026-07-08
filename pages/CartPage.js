class CartPage{
    constructor(page){
        this.page = page;
        this.productNames = page.locator(".cart_description h4 a")
    }

    async goto(){
        await this.page.goto("https://automationexercise.com/view_cart")
    }

    async getCartProductNames(){
        return await this.productNames.allTextContents();
    }
}

module.exports = { CartPage }