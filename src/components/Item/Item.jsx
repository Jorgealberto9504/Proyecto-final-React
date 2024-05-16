/* eslint-disable react/prop-types */
import styles from './Item.module.css'

export const Item = ({marca, modelo, precio, cantidad, image }) => {
  return (
    <div className={styles.item}>
        <div className={styles.item__image}>
            <img src={image} alt={modelo} />
        </div>
        <div className={styles.item__info}>
            <h2 className={styles.item__info__title}>{modelo}</h2>
            <p className={styles.item__info__price}>{precio}</p>
            <a href='#'>Ver Detalles</a>
        </div>
    </div>

  )
}
