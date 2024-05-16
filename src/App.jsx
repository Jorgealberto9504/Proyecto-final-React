/* import styles from "./App.module.css" */  /* al momento de agregar nuestro archivo css debemos de importarlo de esta forma en la parte superior que querramos que sea afectada por este archivo css */
import { Home } from "./Pages/Home/Home.jsx"

const App = () => {
  return (
    <>    
       <Home/> 

 {/* Aqui usamos sugar syntax usando spread operator */

/* greeting="Welcome to our store!" 
  bgBlue={true} */}

{/* Con esta etiqueta mostramos los componenetes que hemos creado e importado en la parte de arriba */}

   
    </>
  )
}

export default App
