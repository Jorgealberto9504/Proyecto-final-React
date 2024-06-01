import Card from "react-bootstrap/Card";


export const ItemDetail = ({
  id, 
  name, 
  description, 
  price, 
  stock, 
  category, 
  image,
}) => {

  return (
    <Card style={{width: "18rem", cursor: "pointer"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        
      </Card.Body>
    </Card>
  )
}



/* ({
    id, 
    name, 
    description, 
    price, 
    stock, 
    category, 
    image,
}) => { 
  
return (
<Card style={{width: "18rem", cursor: "pointer"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        
      </Card.Body>
    </Card>
);
}; */