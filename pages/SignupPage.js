class SignupPage{
    constructor(page){
        this.page = page;
        this.nameInput = page.getByTestId('signup-name')
        this.emailInput   = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');
        this.errorMessage = page.getByText('Email Address already exist!');
    }

    async signup(name, email){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click()
    }
}

module.exports = {SignupPage};
