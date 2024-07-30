import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

const CartValue = () => {
  const { cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (let i in cartItems) {
      sum += cartItems[i].quantity;
    }
    setQuantity(sum);
  }, [cartItems]);

  return <span id="cartNum">{quantity}</span>;
};

export default CartValue;
