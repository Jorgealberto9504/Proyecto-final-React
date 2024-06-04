/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = (item) => {
  const {  id, name, description, price, stock, category, image} = item;

  const {addToCart} = useCartContext();

  const handlleAddToCart = (cantItems) => {
    addToCart(item, cantItems);
    console.log(`Se agregaron ${cantItems} elementos al carrito`);
  }

  return (
    <Card style={{width: "18rem", cursor: "pointer"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <ItemCount stock={stock} initial={1} handlleAddToCart = {handlleAddToCart}/>      
        
      </Card.Body>
    </Card>
  )
}
