import React from 'react';
import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
import AppContext from '../../context';


const Card = ({
   id,
   title,
   price,
   onPlus,
   loading = false }) => {
      
   const { isItemAdded } = React.useContext(AppContext);

   
   const onClickPlus = () => {
      onPlus({ id,perentId: id, title, price })
     
   }
   
   return (
      <div className={styles.card}>
         {loading ? 
         <ContentLoader
            speed={2}
            width={180}
            height={265}
            viewBox="0 0 180 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
            <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
            <rect x="0" y="0" rx="0" ry="0" width="180" height="260" />
            <rect x="0" y="280" rx="0" ry="0" width="138" height="17" />
         </ContentLoader> : 
         <>
            <div className={styles.cardImg}>
               <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>{title}</p>
            <div className={styles.cardButton}>
               <b>{price}руб</b>
               <img alt='plus'
                  onClick={onClickPlus}
                  src={isItemAdded(id)? '/img/close-sm.svg' : '/img/add-plus.svg'}
               />
            </div>
         </>}
      </div>
   )
}

export default Card;