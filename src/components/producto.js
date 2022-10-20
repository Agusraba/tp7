import React from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate()
    return (
    <Col md={4}>
  <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.product.thumbnail} />
<Card.Body>
  <Card.Title>{props.product.title}</Card.Title>
  <Card.Text>
    id:{props.product.id} descripcion:{props.product.description}
  </Card.Text>
  <Button variant="primary" onClick={() => navigate(`/productos/${props.product.id}`) }>Go somewhere</Button>
</Card.Body>
</Card>
</Col>
    );
}

export default Product;