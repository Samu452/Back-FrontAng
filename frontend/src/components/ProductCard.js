// src/components/ProductCard.js

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Asegúrate de tener el archivo de estilos

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="view-details-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
