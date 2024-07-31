import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import Popup from "../sub-components/Popup";

const Product = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const formattedPrice = product.price.toLocaleString("en-IN");
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productCount = productInCart ? productInCart.quantity : 0;
  const [showPopup, setShowPopup] = useState(false);

  // Function to add the product to the cart
  const handleAdd = () => {
    if (productCount === product.stock - 1) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    }
    addToCart(product);
  };

  // Function to remove the product from the cart
  const handleRemove = () => {
    removeFromCart(product);
  };

  // Calculate whether the "+" button should be disabled
  const isAddButtonDisabled = productCount >= product.stock;

  return (
    <div className="product">
      <div className="imageDiv">
        <img src={product.image} alt="k" className="prodImg" />
      </div>
      <h3 className="prodName">{product.name}</h3>
      <div className="price">
        <p className="prodPrice">₹{formattedPrice}</p>
        {productCount > 0 ? (
          <div className="addremovebuttons">
            <button
              type="button"
              className="button_small"
              onClick={handleRemove}
            >
              -
            </button>
            <span className="prodCount">{productCount}</span>
            <button
              type="button"
              className="button_small"
              onClick={handleAdd}
              disabled={isAddButtonDisabled}
            >
              +
            </button>
          </div>
        ) : (
          <button type="button" className="button" onClick={handleAdd}>
            Add to Cart
          </button>
        )}
      </div>
      {showPopup && <Popup bgcolor={"#ff0000"} content={"Out of Stock"} />}
    </div>
  );
};

export default Product;
