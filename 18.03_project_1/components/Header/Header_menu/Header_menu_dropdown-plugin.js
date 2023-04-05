const menuDropBTN = document.querySelectorAll(".menu-inner__drop-btn")
const dropdown_content = document.querySelectorAll(".menu_inner__dropdown-content")

const Function_drop = (event) => {
  let i = event.target.getAttribute('data-drop-menu-btn-id')
  dropdown_content[i].classList.toggle("flex")
}
const Function_drop_close = () => {
  dropdown_content.forEach(item => {
    item.classList.remove('flex')
  })
}
menuDropBTN.forEach(item => {
  item.addEventListener('click',Function_drop)
})

document.addEventListener('click', (event) => {
  if (event.target == ROOT_HEADER_MENU || event.target == menuCloseBTN){
    Function_drop_close()
  }
})
document.addEventListener('keyup', (event) => {
  if (event.code == 'Escape') {
    Function_drop_close()
  }
})
// Код отвечает за Header-menu => DropDown
// Работает при нажатии на кнопки menu-inner__drop-btn, находящейся в папке Header/Header_menu/Header-menu.js

// closeBTN переменная, находящаяся в папке Header/Header_menu/Header_menu-plugin.js
// ROOT_HEADER_MENU ссылка на переменную, находяющуюся в папке const/root.js (В файле index.html - id='header_menu')

// data-drop-menu-btn-id для каждой категории прописыватеся вручную (Можеть быть только числом начинающимся с 0)