const cardOpenBTN = document.querySelector(".header__rightside__card-open-btn")  
const cardCloseBTN = document.querySelector(".card-inner__heading__card-close-button")
const card = document.querySelector(".card")

const Function_card_open = () => {
  if (document.documentElement.clientWidth <= 450){
    card.style.transform = `translateX(0px)`
    ROOT_HEADER_CARD.classList.add("active")
  }
  if (document.documentElement.clientWidth > 450){
    card.style.transform = `translateX(${document.documentElement.clientWidth-320}px)`
    ROOT_HEADER_CARD.classList.add("active")}
}

const Function_card_close = () => {
  card.style.transform = `translateX(${document.documentElement.clientWidth}px)`
  ROOT_HEADER_CARD.classList.remove("active")
}

const Function_card_check = (event) => {
  if (event.target == ROOT_HEADER_CARD) {
    Function_card_close()
  }
}

cardOpenBTN.addEventListener('click',Function_card_open)
cardCloseBTN.addEventListener('click',Function_card_close)
ROOT_HEADER_CARD.addEventListener('click',Function_card_check)
document.addEventListener('keyup', (event) => {
  if (event.code == 'Escape') {
   Function_card_close()
  }})
window.addEventListener('resize',() => {
  if (ROOT_HEADER_CARD.classList.contains('active')) {
    card.style.transform = `translateX(${document.documentElement.clientWidth - 320}px)`
  }else {
    card.style.transform = `translateX(${document.documentElement.clientWidth}px)`
  }
})
window.addEventListener('load',() => {
  card.style.transform = `translateX(${document.documentElement.clientWidth}px)`
})

// Плагин отвеечает за Header_card.js
// Работает при нажатии на кнопку header__rightside__card-open-btn,  в Header/Header.js

// Переменная cardLocation = document.documentElement.clientWidth, находится в Header/Header_card/Header_card.js
// ROOT_HEADER_CARD находится в const/root.js, ссылка на html - id="header_card"


const card_list = document.querySelector('.card-inner__list')

window.addEventListener('load', () => {
  card_list.style.height = `${document.documentElement.clientHeight - 200}px`
})
window.addEventListener('resize', () => {
  card_list.style.height = `${document.documentElement.clientHeight - 200}px`
})
// Плагин для скролла в Header_card.js