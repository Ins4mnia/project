const btn = document.querySelectorAll('.catalog__product-category__description__products-open-btn')
let i = c1
const s1 = () => {
  btn.forEach(item => {
    item.addEventListener('click', () => {
      console.log(item.getAttribute('data-category-id'))
      i = item.getAttribute('data-category-id')
      products.render()
    })
  })
}
s1()