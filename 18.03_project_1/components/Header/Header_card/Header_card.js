class Header_card {
  render() { 
    ROOT_HEADER_CARD.innerHTML = `                    
    <div class="card">
      <div class="card-inner">
        <div>  
          <div class="card-inner__heading">
            <a href="#" class="card-inner__heading__logo">Logo</a>
            <button class="card-inner__heading__card-close-button">&#10006;</button>
          </div>
          <div class="card-inner__list">
            <div class="card-inner__list__product">1</div>
          </div>
        </div>
        <div class="card-inner__request">
          <a href="#" class="card-inner__request__link">Позвонить</a>
        </div>
      </div>
    </div>
    `
  }
}
const header_card = new Header_card()
header_card.render()
