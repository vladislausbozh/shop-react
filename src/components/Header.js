

const Header = () => {
   return(
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>Tea Hous</h3>
            <p>Чай, оптом и в розницу</p>
          </div>
        </div>
        <div className="headerRight">
          <img src="/img/cart.svg" />
          <span>Корзина</span>
        </div>
      </header>
   )
}

export default Header;