import { useCartContext } from "../Context/CartContext";

export const Cart = () => {
  const {totalQty} = useCartContext();
  console.log(totalQty);

  return (
    <div>Este es el cart</div>
  )
}
 