/* eslint-disable react/prop-types */
import {Item} from '../Item/Item'
import styles from './ItemList.module.css'

export const ItemList = ({guitarrasList}) => {
    console.log(guitarrasList)
  return (
    <div className={styles.itemlist}>
        {guitarrasList.map((elem)=>{
        return <Item key={elem.cantidad} {...elem} />
})}
    </div>
  )
}
