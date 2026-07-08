class LoginPage{
    constructor(page){
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
        this.loggedInText = page.getByText('Logged in as');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }
    async goto(){
        await this.page.goto("https://automationexercise.com/")
        await this.loginLink.click()
    }
    
    async login(email,password){
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async logout(){
        await this.logoutLink.click()
    }
}

module.exports = { LoginPage };
