import React from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container } from 'react-bootstrap'
import '../index.css'


const DetalleProd = (props) => {
    const { id } = useParams()
    console.log(id)
    const [product, setProduct] = React.useState({});
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(err => console.error(err));
    }, []);
    console.log(product)
    return(
        <Container>
  <Card style={{ width: '70rem' }}>
<Card.Img variant="top" src={product && product.thumbnail} />
<Card.Body>
  <Card.Title>{product && product.title}</Card.Title>
  <Card.Text>
    id:{product.id}
    </Card.Text>
    <Card.Text>
    descripcion:{product.description}
    </Card.Text> 
</Card.Body>
</Card>
</Container>
    )
}

export default DetalleProd;