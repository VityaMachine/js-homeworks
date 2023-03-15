class RestorationProduct {
    constructor ({productName, productWeiht, ingredients, productPrice, productImageUrl, keywords, id, date}) {
        this.id = id();
        this.productName = productName;
        this.productWeiht = productWeiht;
        this.ingredients = ingredients;
        this.productPrice = productPrice;
        this.productImageUrl = productImageUrl;
        this.keywords = keywords.split(",");
        this.stopList = true;
        this.quantity = 0;
        this.date = date()
    }
}

function StoreProduct ({productName, productPrice, productImage, productDescription, keywords, id, date}) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productImage = productImage;
    this.productDescription = productDescription;
    this.keywords = keywords.split(",");
    this.id = id();
    this.date = date()
}


export {RestorationProduct, StoreProduct}