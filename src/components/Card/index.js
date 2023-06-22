
import { useState } from 'react'
import styles from './Card.module.scss'

const Card = ({id,title,price,onPlus,added=false}) => {

   const [isAdded,setIsAdded] = useState(added)

   const onClickPlus = () => {
      onPlus({id,title,price})
      setIsAdded(!isAdded)
   }
  
   return (
      <div className={styles.card}>
         <div className={styles.cardImg}>
            <img width={120} src="/img/icon-tea.png" alt="Tea" />
         </div>
         <p>{title}</p>
         <div className={styles.cardButton}>
            <b>{price}руб</b>
            <img alt='plus' 
               onClick={onClickPlus}
               src={isAdded ? '/img/close-sm.svg':'/img/add-plus.svg' }
               
            />
         </div>
      </div>
   ) 
}

export default Card;