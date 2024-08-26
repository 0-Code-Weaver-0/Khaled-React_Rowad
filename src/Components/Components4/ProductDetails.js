import React from 'react';
import { Card } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
