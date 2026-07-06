class SearchPage{
    constructor(page){
        this.page = page;
        this.searchBar = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.productNames = page.locator('.productinfo p');
    }

    async searchFor(item){
        await this.searchBar.fill(item);
        await this.searchButton.click();
    }

    async getProductNames(){
        return await this.productNames.allTextContents();
    }
}

module.exports = {SearchPage}