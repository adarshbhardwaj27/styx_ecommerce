import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import Popup from "../sub-components/Popup";

const CartProd = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const productInCart = cartItems.find((prod) => prod.id === item.id);
  const productCount = productInCart ? productInCart.quantity : 0;
  // Calculate whether the "+" button should be disabled
  const isAddButtonDisabled = productCount >= item.stock;
  // Function to add the product to the cart
  const handleAdd = () => {
    if (productCount == item.stock - 1) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    }
    addToCart(item);
  };

  // Function to remove the product from the cart
  const handleRemove = () => {
    removeFromCart(item);
  };
  return (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="prodCartImg" />
      <div className="ProdDesc">
        <div className="innerProdDesc">
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <div className="CartUpdateBtns">
            <button className="CartUpdateBtn" onClick={handleRemove}>
              -
            </button>
            <button
              className="CartUpdateBtn"
              disabled={isAddButtonDisabled}
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
        <div className="CartProdPrice">
          <p>₹ {item.price.toLocaleString("en-IN")}</p>
        </div>
      </div>
      {showPopup && <Popup bgcolor={"#ff0000"} content={"Out of Stock"} />}
    </div>
  );
};

export default CartProd;
