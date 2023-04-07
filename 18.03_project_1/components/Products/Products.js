class Products {
  render() {
    let htmlProducts = '';
    PRODUCT_CATEGORIES_ARR[PRODUCT_CATEGORIES_STR.indexOf(item_id)].forEach(({name,id,img,price}) => {
      htmlProducts += `  
        <div class="products-item">
          <div class="products-item__img">
             <img src="${img}" alt="${name}">
          </div>
          <div class="products-item__description">
            <h1 class="products-item__description__heading">${name}</h1>
            <div class="products-item__description__price-and-button">
              <span class="products-item__description__price-and-button__price">Цена: ${price}</span>
              <button class="products-item__description__price-and-button__button-add" data-product-id="${id}">Добавить в корзину</button>
              
            </div>
          </div>
        </div>
      `
    })
    let htmlP = `
    <h1  id="products_heading">Товары</h1>
      <div class="wrapper">
        <div class="products-section">
          ${htmlProducts}
        </div>
      </div>
    `
    ROOT_PRODUCTS.innerHTML = htmlP
  }
}
const products = new Products()
products.render()