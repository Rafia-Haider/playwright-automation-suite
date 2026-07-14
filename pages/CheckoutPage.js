class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.addressDetails = page.getByText('Address Details');
        this.placeOrderButton = page.locator('.btn.btn-default.check_out');
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CheckoutPage };