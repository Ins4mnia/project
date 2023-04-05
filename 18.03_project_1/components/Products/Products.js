
class Products {
  render() {
    let htmlProducts = '';
    i.forEach(({name,id,img,price}) => {
      htmlProducts += `
        <div>${name}  ${id}  ${img}  ${price}</div>
      `
    })
    let htmlP = `
      <div class="wrapper">
        ${htmlProducts}
      </div>
    `
    ROOT_PRODUCTS.innerHTML = htmlP
  }
}
const products = new Products()
products.render()