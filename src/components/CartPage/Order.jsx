import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

const Order = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (let i in cartItems) {
      sum += cartItems[i].price;
    }
    setSubtotal(sum);
    let taxammount = 0.18 * sum;
    let totalamount = sum + taxammount;
    setTotal(totalamount);
    setTax(taxammount);
  }, [cartItems]);

  return (
    <div className="order">
      <h1>Summary</h1>
      <div className="subtotal">
        <p>Subtotal</p>
        <p>₹ {subtotal.toLocaleString("en-IN")}</p>
      </div>
      <div className="tax">
        <p>Tax(GST 18%)</p>
        <p>₹ {tax.toLocaleString("en-IN")}</p>
      </div>
      <div className="total_out">
        <hr />
        <div className="total">
          <p>Total</p>
          <p>₹ {total.toLocaleString("en-IN")}</p>
        </div>
        <hr />
      </div>
      <button
        type="button"
        className="checkout"
        onClick={() => setCartItems([])}
      >
        Checkout
      </button>
    </div>
  );
};

export default Order;
