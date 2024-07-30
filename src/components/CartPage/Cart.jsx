import React from "react";
import CartProducts from "./CartProducts";
import Order from "./Order";

const Cart = () => {
  return (
    <div className="cartPage">
      <CartProducts />
      <Order />
    </div>
  );
};

export default Cart;
