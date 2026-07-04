class RegisterPage{
    constructor(page){
        this.page = page;
        this.genderMr = page.locator('#id_gender1');
        this.genderMrs = page.locator('#id_gender2');
        this.passwordInput = page.getByTestId('password');
        this.daysSelect    = page.getByTestId('days');
        this.monthsSelect  = page.getByTestId('months');
        this.yearsSelect   = page.getByTestId('years');

        this.firstNameInput = page.getByTestId('first_name');
        this.lastNameInput  = page.getByTestId('last_name');
        this.addressInput   = page.getByTestId('address');
        this.countrySelect  = page.getByTestId('country');
        this.stateInput     = page.getByTestId('state');
        this.cityInput      = page.getByTestId('city');
        this.zipcodeInput   = page.getByTestId('zipcode');
        this.mobileInput    = page.getByTestId('mobile_number');

        this.createAccountButton = page.getByTestId('create-account');

    }

    async fillform(data){
        if(data.gender == "Mr") await this.genderMr.click({force:true})
        else await this.genderMrs.click({force:true})

        await this.passwordInput.fill(data.password)
        await this.daysSelect.selectOption(data.day);
        await this.monthsSelect.selectOption(data.month);
        await this.yearsSelect.selectOption(data.year);

        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.addressInput.fill(data.address);
        await this.countrySelect.selectOption(data.country);
        await this.stateInput.fill(data.state);
        await this.cityInput.fill(data.city);
        await this.zipcodeInput.fill(data.zipcode);
        await this.mobileInput.fill(data.mobile);

        await this.createAccountButton.click();

    }
}

module.exports = { RegisterPage };
