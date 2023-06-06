import { useState } from 'react'
import styles from './Card.module.scss'


const Card = (props) => {

   const [isAdded,setIsAdded] = useState(false)

   const onClickPlus = () => {
   setIsAdded(!isAdded)
   
  }
   return (
      <div className={styles.card}>
         <div className={styles.cardImg}>
            <img width={120} src="/img/icon-tea.png" alt="Tea" />
         </div>
         <p>{props.title}</p>
         <div className={styles.cardButton}>
            <b>{props.price}</b>
            <img 
            onClick={onClickPlus}
            src={isAdded ? '/img/btn-close.svg' : '/img/add-plus.svg'} 
            />
         </div>
      </div>
   )
}

export default Card;