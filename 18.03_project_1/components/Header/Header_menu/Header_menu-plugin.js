const menuOpenBTN = document.querySelector(".header__leftside__menu-open-btn")  
const menuCloseBTN = document.querySelector(".menu-inner__heading__menu-close-button")
const menu = document.querySelector(".menu")

const Function_open = () => {
  menu.style.transform = "translateX(0)"
  ROOT_HEADER_MENU.classList.add("active")
}

const Function_close = () => {
  menu.style.transform = "translateX(-450px)"
  ROOT_HEADER_MENU.classList.remove("active")
}

const Function_check = (event) => {
  if (event.target == ROOT_HEADER_MENU) {
    Function_close()
  }
}

menuOpenBTN.addEventListener('click',Function_open)
menuCloseBTN.addEventListener('click',Function_close)
ROOT_HEADER_MENU.addEventListener('click',Function_check)
document.addEventListener('keyup', (event) => {
  if (event.code == 'Escape') {
   Function_close()
  }})


// Код отвечает за Header-menu 
// Работает при нажатии кнопки header__leftside__menu-open-btn, находящейся в папке Header/Header.js 

// ROOT_HEADER_MENU ссылка на переменную, находяющуюся в папке const/root.js (В файле index.html - id='header_menu')
// Класс .active добавляет темный фон на основной блок - ROOT_HEADER_MENU