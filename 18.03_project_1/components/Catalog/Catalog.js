class Catalog {
  render() {
    let htmlCatalog = '';
    CATALOG.forEach(({id,name,img}) => {
      htmlCatalog += `
      <div class="swiper-slide">
        <div class="catalog__product-category">
          <div class="catalog__product-category__img">
             <img src="${img}" alt="${name}">
          </div>
          <div class="catalog__product-category__description">
            <h1 class="catalog__product-category__description__heading">${name}</h1>
            <button class="catalog__product-category__description__products-open-btn" data-category-id="${id}">Показать товары</button>
          </div>
        </div>
      </div>
      `
    })
    const htmlC = `
    <div class="swiper catalog-wrapper">
      <div class="swiper-wrapper">
        ${htmlCatalog}
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    `;

    ROOT_CATALOG.innerHTML = htmlC
  }
}
const catalog = new Catalog()
catalog.render()

// CATALOG файл с массивом категорий товаров, находится в папке const/catalog.js
// ROOT_CATALOG ссылка на переменную в папке const/root.js (в html - id="catalog")
