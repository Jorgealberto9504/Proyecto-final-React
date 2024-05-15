/* eslint-disable react/prop-types */
import styles from "./ItemListContainer.module.css"

export const ItemListContainer = ({bgBlue, greeting}) => {  /* aca estamos usando props, con solo agregarle entre los parentesis la palabra props */
    const defaultTitle = "Welcome to the app";



/* Desestructuracion se hace de la siguiente forma y significa crear mas de 2 variables en una sola linea tomando su
contenido de otro lado en este caso de props 

De igual forma podemos desestructurar nuestros props directamente en el parentesis de la parte de arriba o se en la zona que estamos declarando nuestra funcion
*/

/* const { bgBlue, greeting} = props */




  return (
<>


<h1 className={styles.hola}>{greeting ? greeting : defaultTitle}</h1>{" "}
      {/* aqui podemos ver como estamos utilizando una clase para que usemos nuestro archivo css por medio de styles */}

      {/* Dentro de estas llaves con loas cuales podemos usar javascript dentro de html no podemos usar cualquier tipo de codigo, por ejemplo para usar un if debemos usarlos forsozamente con operadores ternarios como se muestra en esta linea*/}
<h2 className={bgBlue ? styles.background : styles.backgroundGreen}>This is a text</h2>  {/* aqui podemos ver como estamos utilizando una clase para que usemos nuestro archivo css por medio de styles */}


</>


 )
}
