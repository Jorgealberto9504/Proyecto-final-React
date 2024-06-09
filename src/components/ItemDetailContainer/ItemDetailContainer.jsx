import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/MockData.js";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { collection, getDoc, doc} from "firebase/firestore";
import { db } from "../../firebase/dbConnection.js";

export const ItemDetailContainer = () => {
    const {prodId} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "products")
        const refDoc = doc(productsCollection, prodId)

        getDoc(refDoc)
        .then((doc) =>{
          setProduct({id:doc.id, ...doc.data()})
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);

        })
       /*  getProductById(prodId)
       .then((res) => {
         setProduct(res);
         setLoading(false);
       })
       .catch((err) => {
         setLoading(false);
         console.log(err);
       }); */
  }, [prodId]);


  return loading === true ? (
    <p>Loading...</p>
    ) : (
      
      <div>
        <ItemDetail {...product}/>
      </div>
  );
};
