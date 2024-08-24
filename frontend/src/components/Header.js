import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Sammy's Store</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  </header>
);

export default Header;
