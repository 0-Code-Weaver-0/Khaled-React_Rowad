import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductList({ products, category }) {
  return (
    <div>
      <h2>{category}</h2>
      {products
        .filter(product => product.product_category === category)
        .map(product => (
          <Card key={product.product_id} className="mb-3">
            <Card.Body>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>{product.product_desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default ProductList;