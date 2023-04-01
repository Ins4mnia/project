const openBTN = document.querySelector(".header__leftside__menu-open-btn")  
const closeBTN = document.querySelector(".menu-inner__heading__close-button")
const dropBTN = document.querySelector(".menu-inner__drop-btn")
const dropdown_content = document.querySelector(".menu_inner__dropdown-content")
const menu_inner = document.querySelector(".menu_inner")
const menu = document.querySelector(".menu")


const Function_open = () => {
  menu.style.transform = "translateX(0)"
  ROOT_HEADER_MENU.classList.toggle("active")
}

const Function_close = () => {
  menu.style.transform = "translateX(-450px)"
  ROOT_HEADER_MENU.classList.toggle("active")
}

const Function_check = (event) => {
  if (event.target == ROOT_HEADER_MENU) {
    Function_close()
  }
}
const Function_drop = () => {
  dropdown_content.classList.toggle("flex")
}

openBTN.addEventListener('click',Function_open)
closeBTN.addEventListener('click',Function_close)
dropBTN.addEventListener('click',Function_drop)
ROOT_HEADER_MENU.addEventListener('click',Function_check)