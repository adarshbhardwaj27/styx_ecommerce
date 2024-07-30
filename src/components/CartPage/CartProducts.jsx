import React, { useContext } from "react";
import CartProd from "./CartProd";
import { CartContext } from "../../App";

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1>Your Bag</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="ProdList">
            {cartItems.map((item, key) => (
              <CartProd item={item} key={key} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CartProducts;
