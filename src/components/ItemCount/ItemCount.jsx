import { useState } from "react"

export const ItemCount = ({stock}) => {

    
    const [cantItems, setCantItems] = useState(0)
    /* const [estadoPrueba, setestadoPrueba] = useState(0)  */


   /*  useEffect(() => {  */   /* useEffect nos srive para ejecutar una funcion secundaria, despues de accionar la funcion principal
    nos corre despues la funcion de useEffect */
/*       console.log('se monto el componente')
 */
      /* return () => {
        console.log('se desmonto el componente');
      }

    }, [cantItems, estadoPrueba] )  */ /* aqui entre corchetes tenemos un array de dependencia con el cual indicamos cuantas veces queremos que se ejecute nuestro useEffect
    podemos ponerle el numero de las veces que queremos que se repita dentro */
    
/*     console.log('se estan declarando las funciones');
 */    const handlleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handlleSubs = () => {
        if(cantItems > 0){
        setCantItems(cantItems - 1)
        }
    }

const handlleAddToCart = () => {
  console.log(`Se agregaron ${cantItems} elementos al carrito`);
}


  return (
    
    <>
    <div>ItemCount</div>
    <div>
    <button onClick={handlleSubs}> - </button>
    <span>{cantItems}</span>
    <button onClick={handlleAdd}> + </button>
    </div>
    <button onClick={handlleAddToCart}>Agregar al carrito</button>
    </>
  )
}
