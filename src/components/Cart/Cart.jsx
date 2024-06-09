import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Table from 'react-bootstrap/Table';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: '', tel: '', email: '' }); // manejo de formulario
  const [showForm, setShowForm] = useState(false); // estado para mostrar u ocultar el formulario

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  };
  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
    console.log("Saving in database");
    console.log("formData", formData);
    console.log("cart", cart);

    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    }
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("Compra realizada con exito, su numero de orden es: " + doc.id)
        console.log(doc)
        clearCart();
        setFormData({ name: "", tel: "", email: "" });
        setShowForm(false); // ocultar el formulario después de guardar la orden
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowForm = () => {
    setShowForm(true); // mostrar el formulario al presionar "Finalizar compra"
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{qty}</td>
              <td>
                <button onClick={() => handleRemoveItem(id, price, qty)}>Remove Item</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>Total price </td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handleClearCart}>Clear Cart</button><br /><br />

      {showForm ? (
        <>
          <input type="text" name="name" id="name" placeholder="Ingrese nombre" onChange={handleOnChange} /><br />
          <input type="number" name="tel" id="tel" placeholder="Ingrese Telefono" onChange={handleOnChange} /><br />
          <input type="email" name="email" id="email" placeholder="Ingrese Email" onChange={handleOnChange} /><br /><br />
          <button onClick={handleSaveCart}>Guardar compra</button>
        </>
      ) : (
        <button onClick={handleShowForm}>Finalizar compra</button>
      )}
    </>
  );
};
