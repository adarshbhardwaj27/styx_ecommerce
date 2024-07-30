import React, { useContext, useEffect } from "react";
import { CartContext } from "../../App";

const Product = ({ product }) => {
  const formattedPrice = product.price.toLocaleString("en-IN");
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productCount = productInCart ? productInCart.quantity : 0;
  // Function to add the product to the cart
  const handleAdd = () => {
    addToCart(product);
  };

  // Function to remove the product from the cart
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <div className="product">
      <div className="imageDiv">
        <img src={product.image} alt="k" srcSet="" className="prodImg" />
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
            <button type="button" className="button_small" onClick={handleAdd}>
              +
            </button>
          </div>
        ) : (
          <button type="button" className="button" onClick={handleAdd}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
