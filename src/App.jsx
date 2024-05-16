import {Navbar} from "./components/Navbar/Navbar.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx" /* Aqui estamos importando los componentes qye hemos creado pero mas abajo debemos de mostrarlos */
/* import styles from "./App.module.css" */  /* al momento de agregar nuestro archivo css debemos de importarlo de esta forma en la parte superior que querramos que sea afectada por este archivo css */
import {ItemCount} from "./components/ItemCount/ItemCount.jsx"
const App = () => {
  const itemListContainerProps = {
    greeting:"Welcome to villara shop!",
    bgBlue: true

  }

  return (
    <>    
    
<Navbar/>
<ItemListContainer {...itemListContainerProps} />
<ItemCount/>

 {/* Aqui usamos sugar syntax usando spread operator */

/* greeting="Welcome to our store!" 
  bgBlue={true} */}

{/* Con esta etiqueta mostramos los componenetes que hemos creado e importado en la parte de arriba */}

   
    </>
  )
}

export default App
