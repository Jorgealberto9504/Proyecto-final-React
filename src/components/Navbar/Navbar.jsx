import { CartWidget } from '../CartWidget/CartWidget';
import styles from './Navbar.module.css'

export const Navbar = () => {

  /* Dentro de las funciones de react solo podemos retornar un solo elemento a menos que encerremos los elementos en un div */
  return (
    <>{/* esto es lo que simula un div para que podamos meter mas elementos al mismo tiempo, a esto se le llama fragment*/}

      {/*  <img src={logo} alt="" />  Como podemos ver en esta parte cuando agregamos llaves, dentro de html podemos agregar codigo javascript dentro de ellas para que nos lo corra react, en este caso metimos la variable logo en la cual importamos la imagen llamada logo */}
      {/* En esta seccion agregamos bootstrap, pero en react para usar clases debemos de poner classname y para seleccionar todas las palabras iguales al mismo tiempo presionamos las siguientes teclas     CMD + shift + L */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className= {`${styles.header} navbar-brand`}  href="#">
            Villara Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Guitarras Electricas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guitarras Acusticas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bajos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {CartWidget}
    </>
  );
};

