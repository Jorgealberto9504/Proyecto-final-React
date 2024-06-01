/* import styles from "./App.module.css" */  /* al momento de agregar nuestro archivo css debemos de importarlo de esta forma en la parte superior que querramos que sea afectada por este archivo css */
import { BrowserRouter, Routes, Route } from "react-router-dom" //Estos son los 3 componentes principales que usaremos de esta libreria
import {Navbar} from "./components/Layout/Navbar/Navbar.jsx"
import { Footer } from "./components/Layout/Footer/Footer.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx"
import { Cart } from "./components/Cart/Cart.jsx"
import { Error } from "./components/Error/Error.jsx"
import {Home} from "./Pages/Home/Home.jsx"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<ItemListContainer/>} />
    <Route path="/category/:catId" element={<ItemListContainer/>} />
    <Route path="/product/:prodId" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="*" element={<Error/>}></Route>
 
    </Routes>
    <Footer/>
   
    </BrowserRouter>
    
  );
};

export default App


 {/* Aqui usamos sugar syntax usando spread operator */

/* greeting="Welcome to our store!" 
  bgBlue={true} */}

{/* Con esta etiqueta mostramos los componenetes que hemos creado e importado en la parte de arriba */}