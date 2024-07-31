import React, { useContext } from "react";
import { CartContext } from "../../App";

const CartProd = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="prodCartImg" />
      <div className="ProdDesc">
        <div className="innerProdDesc">
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <div className="CartUpdateBtns">
            <button
              className="CartUpdateBtn"
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            <button className="CartUpdateBtn" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
        </div>
        <div className="CartProdPrice">
          <p>₹ {item.price.toLocaleString("en-IN")}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProd;
