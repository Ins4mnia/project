class Header_menu {
  render() { 
    ROOT_HEADER_MENU.innerHTML = `                    
    <div class="menu">
      <div class="menu_inner">
        <div class="menu-inner__heading">
          <a href="#c123" class="menu-inner__heading__logo">Logo</a>
          <button class="menu-inner__heading__close-button">&#10006;</button>
        </div>
        <a target="" href="#" class="menu-inner__link">link1</a>
        <button class="menu-inner__drop-btn">NameDropDown</button>
          <div class="menu_inner__dropdown-content">
            <a target="" href="#" class="menu_inner__dropdown-content__link">link1</a>
          </div>
      </div>
    </div>
    `
  }
}
const header_menu = new Header_menu()
header_menu.render()