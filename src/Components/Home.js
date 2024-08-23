import React from "react";
import ProductList from "./ProductList";
import useFetch from "../Hooks/useFetch";
import { Spinner, Alert } from "react-bootstrap";

function Home() {
  const { data: products, loading, error } = useFetch("http://localhost:5000/products");

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const categories = [...new Set(products.map(product => product.product_category))];

  return (
    <div className="container">
      <h1>Shop Now</h1>
      {categories.map(category => (
        <ProductList key={category} products={products} category={category} />
      ))}
    </div>
  );
}

export default Home;