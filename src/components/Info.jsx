import React from "react";

import AppContext from "../context";
import styles from './Drawer/Drawer.module.scss'

const Info = ({descriotion,image}) => {
   const { setCartOpened } = React.useContext(AppContext)
   return (
      <div className={styles.cartEmpty}>
         <img width={200} height={200} src={image} alt='free-box' />
         <h3>{descriotion}</h3>
         <button onClick={() => setCartOpened(false)}>
            К покупкам
         </button>
      </div>
   )
}

export default Info;