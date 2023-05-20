const Drawer = () => {
   return(
      <div className="drawer">
          <h3>Корзина</h3>
          <div className="items">
          <div className="cartItem">
            <img width={70} height={70} src="./img/icon-tea.png" alt="Tea" />
            <div>
              <p>Фруктовый чай - Бора Бора</p>
              <b>150 руб</b>
            </div>
            <img className="removeBtn"  src="/img/btn-close.svg" alt="Remove" />
          </div>

          <div className="cartItem">
            <img width={70} height={70} src="./img/icon-tea.png" alt="Tea" />
            <div>
              <p>Фруктовый чай - Бора Бора</p>
              <b>150 руб</b>
            </div>
            <img className="removeBtn"  src="/img/btn-close.svg" alt="Remove" />
          </div>
          </div>
          <div className="cartTotal">
            <ul>
              <li>
                <span>Цена без скидки</span>
                <div></div>
                <b>300 руб.</b>
              </li>
              <li>
                <span>Скидка 5%</span>
                <div></div>
                <b>15 руб</b>
              </li>
              <li>
                <span>Итого</span>
                <div></div>
                <b>285,00 руб</b>
              </li>
              
            </ul>
            <button>Заказать</button>
          </div>
        </div>
   )
}

export default Drawer;