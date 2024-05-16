import styles from './Navbar.module.css'
import { CartWidget } from '../CartWidget/CartWidget'

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
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Guitarras Electricas</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Guitarras Acusticas</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Bajos</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Agenda visita</a>
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

