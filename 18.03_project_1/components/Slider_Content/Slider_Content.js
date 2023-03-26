class Slider_Content {
  render() {
    let htmlSLiderContent = '';
    CATALOG.forEach(({id,name,img}) => {
      htmlSLiderContent += `
      <div class="swiper-slide">
        <div class="content__section-product">
          <div class="content__section-product__img">
             <img src="${img}">
          </div>
          <div class="content__section-product__description">
            <h1 class="content__section-product__description__heading">${name}</h1>
            <button class="content__section-product__description__btn">Показать товары</button>
          </div>
        </div>
      </div>
      `
    })
    const html = `
    <div class="swiper content-wrapper">
      <div class="swiper-wrapper">
        ${htmlSLiderContent}
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    `;

    ROOT_PRODUCTS.innerHTML = html
  }
}
const slider_content = new Slider_Content()
slider_content.render()
