class Header {
  render() {
    ROOT_HEADER.innerHTML = `
      <div class='wrapper'>
        <header class="header">
          <div class="header__leftside">
            <button class="header__leftside__menu-open-btn">≡</button>
          </div>
          <div class="header__center">
            <p>Logo</p>
          </div>
          <div class="header__rightside">
            <button class="header__rightside__card-open-btn"><img src="./img/header/header__basket.png"></button>
          </div>
        </header>
      </div>
    `
  }
}
const header = new Header()
header.render()
{/* <a href="#" class="header__leftside__links">Курятники</a>
              <a href="#" class="header__leftside__links">Кормушки</a>
              <a href="#" class="header__leftside__links">Статьи</a>
              <a href="#" class="header__leftside__links">Корм</a> */}
{/* <button class="header__rightside__btn">Список желаемого</button><span class="header__rightside__counter">1</span> */}
{/* <p class="header__rightside__tel">Контакт<a href="tel:8888888">77777777</a></p> */}