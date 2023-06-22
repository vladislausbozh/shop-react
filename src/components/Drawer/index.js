import styles from './Drawer.module.scss'

const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className={styles.overlay}  >
      <div className={styles.drawer}>
        <div className={styles.drawerTop}>
          <h3>Корзина</h3>
          <img width={35} src="/img/btn-close.svg" alt='close' onClick={onClose} />
        </div>
        {items.length > 0 ?
          <div>
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
                  <b>285,00 руб</b>
                </li>
              </ul>
              <button>Заказать</button>
            </div>
          </div>
          : 
          <div className={styles.cartEmpty}>
            <img width={200} height={200} src='/img/box.png' alt='box' />
            <h3>Не жмоться добавь чай</h3>
            <button onClick={onClose}>
              К покупкам
            </button>
          </div>}




      </div>
    </div>
  )
}

export default Drawer;