class Header_menu {
  render() { 
    ROOT_HEADER_MENU.innerHTML = `                    
    <div class="menu" style="transform:translateX(-450px)">
      <div class="menu-inner">
        <div class="menu-inner__heading">
          <a href="#" class="menu-inner__heading__logo">Logo</a>
          <button class="menu-inner__heading__menu-close-button">&#10006;</button>
        </div>

        <button class="menu-inner__drop-btn" data-drop-menu-btn-id="0">NameDropDown</button>
          <div class="menu_inner__dropdown-content">
            <a target="_blank" href="#" class="menu_inner__dropdown-content__link">link1</a>
            <a target="_blank" href="#" class="menu_inner__dropdown-content__link">link1</a>
          </div>
        
          <a target="" href="#" class="menu-inner__link">link1</a>

      </div>
    </div>
    `
  }
}
const header_menu = new Header_menu()
header_menu.render()