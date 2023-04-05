class Header {
  render() {
    ROOT_HEADER.innerHTML = `
      <div class='wrapper'>
        <header class="header">
          <div class="header__leftside">
            <button class="header__leftside__menu-open-btn">≡</button>
          </div>
          <div class="header__center">
            <a href="#" target="_blank" class="header__center__logo">Logo</a>
          </div>
          <div class="header__rightside">
            <button class="header__rightside__card-open-btn"><img src="./img/header/header__basket.png" alt="Корзина покупок"></button>
          </div>
        </header>
      </div>
    `
  }
}
const header = new Header()
header.render()
// header__leftside__menu-open-btn Открывает меню 
// Код в папке Header/Header_menu

// header__rightside__card-open-btn Открывает корзину
// Код в папке Header/Header_card