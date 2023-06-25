import styles from './Drawer.module.scss'
import Info from '../Info';
import React from 'react';
import AppContext from "../../context";


const Drawer = ({ onClose, onRemove, items = [] }) => {
  const [isOrederComplete, setIsOrederComplete] = React.useState(false)
  const { cartItems, setCartItems} = React.useContext(AppContext)
  const sum = (cartItems.reduce((sum,obj)=>Number(obj.price) + sum,0))
  
  const onClickOrder = () => {
    setIsOrederComplete(true)
    setCartItems([])
    
  }
  return (
    <div className={styles.overlay}  >
      <div className={styles.drawer}>
        <div className={styles.drawerTop}>
          <h3>Корзина</h3>
          <img width={35} src="/img/btn-close.svg" alt='close' onClick={onClose} />
        </div>

        {items.length > 0 ?
          <div className={styles.row}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <img width={70} height={70} src='/img/icon-tea.png' alt='tea' />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price}руб</b>
                  </div>
                  <img src='/img/btn-close.svg' alt='close' onClick={() => onRemove(obj.id)} />
                </div>
              ))}
            </div>
            <div className="cartTotal">
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>{sum} руб</b>
                </li>
              </ul>
              <button onClick={onClickOrder}>Заказать</button>
            </div>
          </div>
          : 
          <Info 
            descriotion = {isOrederComplete ? 'заказ передан в службу доставки ' : 'Не жмоться добавь чай'} 
            image={isOrederComplete ? '/img/free-icon-box.png' : '/img/box.png'} 
          />
        }




      </div>
    </div>
  )
}

export default Drawer;