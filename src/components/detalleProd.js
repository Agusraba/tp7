import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container } from 'react-bootstrap'
import '../index.css'
import { ActionTypes, useContextState } from "../Context";

const DetalleProd = (props) => {
    const {contextState, setContextState} = useContextState() 
    const { id } = useParams()
    console.log(id)
    const [product, setProduct] = useState({});
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(err => console.error(err));
    }, []);
    console.log(product)
    const existe = contextState.producto.find(item => item.id === product.id)
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
    {
                existe ? (
                    <Button variant="danger" onClick={() => setContextState({type: ActionTypes.SetEliminar, value: product.id})}>Eliminar del carrito</Button>
                ) : (
                    <Button variant="success" onClick={() => setContextState({type: ActionTypes.SetProducto, value: product})}>Agregar al carrito</Button>
                )
            }
</Card.Body>
</Card>

</Container>
    )
}

export default DetalleProd;