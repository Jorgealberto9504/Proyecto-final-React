/* eslint-disable react/prop-types */
import styles from './ItemListContainer.module.css'
import ltd from '../../assets/ltd.jpg'

export const ItemListContainer = ({greeting } ) => {//En esta parte tambien desestructuramos las props
    

   /*  const { bgBlue, greeting } = props  */ //esto e sdescomposicion para hacer mas sencillo de leer los props en el elemento
    //De igual forma podemos declararlos en los parentesis de arribas
    const defaultTitle = "Default title"
    
   
  return (
    <main>
     <h1 className={styles.titulo}>{ greeting ? greeting : defaultTitle }</h1> 

       <div className={ styles.container }>
         <h2>Guitarras Electricas</h2>
</div>

<div className={styles.guitarras}>

<div className="card" style={{ width: '18rem' }}>
        <img src={ltd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LTD EC-401</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={ltd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LTD EC-401</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={ltd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LTD EC-401</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={ltd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LTD EC-401</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={ltd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LTD EC-401</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      </div>

</main>
  )
}
