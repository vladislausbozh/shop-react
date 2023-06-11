import { useState } from 'react'
import styles from './Card.module.scss'


const Card = ({price,title,onPlus}) => {

   const [isAdded,setIsAdded] = useState(false)

   const onClickPlus = () => {
      onPlus({price,title})
      setIsAdded(!isAdded)
   }
   return (
      <div className={styles.card}>
         <div className={styles.cardImg}>
            <img width={120} src="/img/icon-tea.png" alt="Tea" />
         </div>
         <p>{title}</p>
         <div className={styles.cardButton}>
            <b>{price}</b>
            <img 
            onClick={onClickPlus}
            src={isAdded ? '/img/btn-close.svg' : '/img/add-plus.svg'} 
            />
         </div>
      </div>
   )
}

export default Card;