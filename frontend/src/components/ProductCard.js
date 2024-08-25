// src/components/ProductCard.js

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Asegúrate de tener el archivo CSS para los estilos

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
