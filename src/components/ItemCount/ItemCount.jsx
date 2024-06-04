import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const ItemCount = ({stock, initial, handlleAddToCart}) => {

    const navigate = useNavigate();
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
 */   
        const[productAdded, setProductAdded] = useState(false);
        const handlleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handlleSubs = () => {
        if(cantItems > 0){
        setCantItems(cantItems - 1)
        }
    }

    const handleTerminarCompra = () => {
      setProductAdded(false)
      navigate("/cart");
    }

    const handleAgregarAlCarrito = () => {
      setProductAdded(true);
      handlleAddToCart(cantItems  )
    }

  return (
    
    <> 
    <div>ItemCount</div>
    <div>
    <button onClick={handlleSubs}> - </button>
    <span>{cantItems}</span>
    <button onClick={handlleAdd}> + </button>
    </div>

    {productAdded ? (
      <button onClick={handleTerminarCompra}> Terminar compra </button>
   
    ) : (
      <button onClick={handleAgregarAlCarrito}> Agregar al carrito </button>
      )

    }
    </>
  )
}

