import styles from './Card.module.scss'


const Card = (props) => {
  const onClickButton = () => {
   alert(props.title)
  }
   return (
      <div className={styles.card}>
         <div className={styles.cardImg}>
            <img width={120} src="/img/icon-tea.png" alt="Tea" />
         </div>
         <p>{props.title}</p>
         <div className={styles.cardButton}>
            <b>{props.price}</b>
            <button className="button" onClick={onClickButton}>+</button>
         </div>
      </div>
   )
}

export default Card;