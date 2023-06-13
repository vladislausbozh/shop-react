import styles from './Header.module.scss'

const Header = (props) => {
   return(
      <header>
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" />
          <div className={styles.headerInfo}>
            <h3>Tea Hous</h3>
            <p>Чай, оптом и в розницу</p>
          </div>
        </div>
        <div  className={styles.headerRight} onClick={props.onClickCart}>
          <img  src="/img/basket.svg" />
          <span>Корзина</span>
        </div>
      </header>
   )
}

export default Header;