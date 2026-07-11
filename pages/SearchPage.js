class SearchPage{
    constructor(page){
        this.page = page;
        this.searchBar = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.productNames = page.locator('.productinfo p');
    }

    async goto(){
        await this.page.goto("https://automationexercise.com/products")
    }

    async searchFor(item){
        await this.searchBar.fill(item);
        await this.searchButton.click();
    }

    async getProductNames(){
        return await this.productNames.allTextContents();
    }

    async addProductToCart(productName) {
    const product = this.page.locator('.productinfo', { hasText: productName });
    await product.hover();
    await product.locator('.add-to-cart').click({ force: true });
}
}

module.exports = {SearchPage}