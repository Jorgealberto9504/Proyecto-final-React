/* eslint-disable react/prop-types */
/* import styles from './Item.module.css'
 */
/* import Button from 'react-bootstrap/Button';
 */
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

export const Item = ({id, name, image }) => {


  const handleOnClick = () => {
    console.log("click");
  };
  
  return (

    <Card style={{width: "18rem", cursor: "pointer"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/product/${id}`} onClick={handleOnClick}>
          Detalles
          </Link>
      </Card.Body>
    </Card>
      );
    };
    {/* <div className={styles.item}>
        <div className={styles.item__image}>
            <img src={image} alt={name} />
        </div>
        <div className={styles.item__info}>
            <h2 className={styles.item__info__title}>{name}</h2>
            <p className={styles.item__info__price}>{price}</p>
            <Link variant="primary" onClick={handleOnClick}> Detalles </Link>
        </div>
    </div> */}


