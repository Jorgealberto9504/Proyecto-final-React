/* import {ItemListContainer} from "../../components/ItemListContainer/ItemListContainer"
import { Layout } from "../../components/Layout/Layout" */
/*  import { useEffect } from "react"; 
 import { useCartContext } from "../../Context/CartContext";
  */
 import { importProductsFromMock } from "../../utils/importProducts"

export const Home = () => {
/*   const { comision, setTotalQty } = useCartContext();

  useEffect(() => {
    setTotalQty(comision);
    console.log(comision);
  },[]) */

  return (
  <>
  <div> Home page    </div>
  <button onClick={importProductsFromMock}>Agregar productos desde mock</button>
  </>
  )
}

 /*  const { comision, setTotalQty } = useCartContext(); */



/*   useEffect(() => {
    setTotalQty(comision);
    console.log(comision);
  },[]) */


  /*   const itemListContainerProps = {
        greeting:"Welcome to villara shop!",
        bgBlue: true
    
      } */

 
