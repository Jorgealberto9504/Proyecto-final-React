import { useCartContext } from "../Context/CartContext";

export const CartWidget = () => {
const { totalQty } = useCartContext();

  return (
    <div>
        <span>🛒</span>
        <span> {totalQty} </span>
    </div>
  );
};
