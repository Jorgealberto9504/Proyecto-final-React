import styles from './Navbar.module.css'
import { CartWidget } from '../../CartWidget/CartWidget'
import {Link, NavLink} from "react-router-dom"

export const Navbar = () => {
    
  return (
    <header className={styles.header}>
            {/* <img src={logo} alt="" className={styles.logoNavbar} /> */} {/* Las llaves en jsx nos sirven para indicar que usaremos codigo de javascript dentro de ellas */}
    {/* <nav className={styles.background}>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
      </nav> */}
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Villara Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav gap-3">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/category/electricas">Electricas</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/category/acusticas">Acusticas</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cart">Cart</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About us</Link>
        </li>
      </ul>
      
    </div>
    <CartWidget/>
  </div>
</nav>
</>
     {/* <CartWidget/> */}
     </header>
  )
}

