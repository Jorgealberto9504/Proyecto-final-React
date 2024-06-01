/* eslint-disable react/prop-types */
import styles from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../utils/MockData'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
/* import { useFetch } from '../../hooks/useFetch'
 */

export const ItemListContainer = ({greeting } ) => {//En esta parte tambien desestructuramos las props
  const defaultTitle = " Villara Shop "
   const [products, setProducts] = useState([]);
   const [loading, setLoading]= useState(true);
   

   const {catId} = useParams();
   console.log(catId);
 
/*    const url = "https://fakestoreapi.com/products";
   const method = "GET"; */
/*    const { data, loading, error } = useFetch(url, method, null); */

   //Con esto cargamos nuestros productos y no los de la API, comprobar con el archivo de REACT3
 useEffect(()=>{
  setLoading(true)

  if(catId){
    getProductsByCategory(catId).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }else{
    getProducts()
.then((res)=>{
 setProducts(res);
  setLoading(false);
})
  
  .catch((error) => {
    console.log(error);
  });
  }


  /* if (catId){
    const filterdProducts = products.filter((elem)=> elem.type === catId)
    setProducts(filterdProducts)
  } */
  //setProduct().then((res) => console.log(res));
}, [catId]);
   /*  const { bgBlue, greeting } = props */   //esto e sdescomposicion para hacer mas sencillo de leer los props en el elemento
    //De igual forma podemos declararlos en los parentesis de arribas
    
 
   
  return (
    <main>
     <h1 className={styles.titulo}>{ greeting ? greeting : defaultTitle }</h1> 
      {loading === true ? (
      <p>Loading...</p> ): (

      <>
      <div className={ styles.container }>
      <h2>Guitarras</h2>

      </div>
   <ItemList productsList={products}/>
   </>
      )}
       
</main>
  )
}


         
         {/* 
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
      </div> */}
    {/*   {console.log(guitarras)} */}

      
  
