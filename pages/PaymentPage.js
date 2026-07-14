class PaymentPage {
    constructor(page) {
        this.page = page;
        this.nameOnCard    = page.getByTestId('name-on-card');
        this.cardNumber    = page.getByTestId('card-number');
        this.cvc           = page.getByTestId('cvc');
        this.expiryMonth   = page.getByTestId('expiry-month');
        this.expiryYear    = page.getByTestId('expiry-year');
        this.payButton     = page.getByTestId('pay-button');
        this.successMessage = page.locator('#success_message .alert-success');
    }

    async fillPayment(data) {
        await this.nameOnCard.fill(data.name);
        await this.cardNumber.fill(data.cardNumber);
        await this.cvc.fill(data.cvc);
        await this.expiryMonth.fill(data.expiryMonth);
        await this.expiryYear.fill(data.expiryYear);
        await this.payButton.click();
    }
}

module.exports = { PaymentPage };