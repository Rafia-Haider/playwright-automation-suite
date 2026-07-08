class CartModal{
    constructor(page){
        this.page = page;
        this.closeModalBtn = page.locator(".close-modal") 
    }

    async continueShopping(){
        await this.closeModalBtn.click()
    }
}

module.exports = {CartModal};