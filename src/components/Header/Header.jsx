import React from "react";
import CartValue from "../sub-components/CartValue";
import { Link } from "react-router-dom";
// import cart from "../media/cart.svg";

const Header = () => {
  return (
    <nav className="nav_bar">
      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <h1 className="heading">SwipeKart</h1>
      </Link>
      <div className="cart">
        <Link to={"/cart"}>
          <img src="/media/cart.svg" alt="" srcSet="" className="cartImage" />
        </Link>
        <CartValue />
      </div>
    </nav>
  );
};

export default Header;
