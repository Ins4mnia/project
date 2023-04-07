const catalog_wrapper = document.querySelector('.catalog-wrapper')
const PRODUCT_CATEGORIES_ARR = [Kyratnik,Dobavki,Korm,Kormushki]
const PRODUCT_CATEGORIES_STR = ['Kyratnik','Dobavki','Korm','Kormushki']
let item_id = 'Kyratnik'
let item_id_check = ''

const productsRender = () => {
  item_id = event.target.getAttribute('data-category-id')
    if (item_id !== item_id_check) {
      item_id_check = item_id
      products.render()
    }else {
      return false
    }
}
catalog_wrapper.addEventListener('click',(event) => {
  if (event.target.className == 'catalog__product-category__description__products-open-btn'){
    productsRender()
  }
})
