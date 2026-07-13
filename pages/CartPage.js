class CartPage{
    constructor(page){
        this.page = page;
        this.productNames = page.locator(".cart_description h4 a")
        this.proceedToCheckoutButton = page.locator('.check_out');
        this.checkoutModal = page.getByText('Register / Login account to proceed on checkout.');
    }

    async goto(){
        await this.page.goto("https://automationexercise.com/view_cart")
    }

    async getCartProductNames(){
        return await this.productNames.allTextContents();
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = { CartPage }