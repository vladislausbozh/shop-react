const Drawer = ({onClose,items = []}) => {
   return(
      <div  className="overlay"  >
        <div className="drawer">
          <div className="drawer-top">
            <h3>Корзина</h3>
            <img onClick={onClose} width={35} src="/img/btn-close.svg"/>
          </div>
          <div className="items">
            {items.map((obj)=>(
              <div className="cartItem">
              <img width={70} height={70} src="./img/icon-tea.png" alt="Tea" />
              <div>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img className="removeBtn"  src="/img/btn-close.svg" alt="Remove" />
            </div>
            ))}
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
      </div>
   )
}

export default Drawer;