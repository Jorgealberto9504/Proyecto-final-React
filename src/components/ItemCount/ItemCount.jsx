import { useState } from "react"

export const ItemCount = () => {

    
    const [cantItems, setCantItems] = useState(0)
    
    const handlleAdd = () => {
        setCantItems(cantItems + 1)
        console.log('click +' , cantItems);
    }
    const handlleSubs = () => {
        if(cantItems > 0){
        setCantItems(cantItems - 1)
        console.log('click -' , cantItems);
        }
    }


  return (
    <>
    <div>ItemCount</div>
    <button onClick={handlleSubs}>-</button>
    <span>{cantItems}</span>
    <button onClick={handlleAdd}>+</button>
    </>
  )
}
