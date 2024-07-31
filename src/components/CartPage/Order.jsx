import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import Popup from "../sub-components/Popup";

const Order = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleCheckout = () => {
    if (cartItems.length === 0) return; // Do nothing if cart is empty
    // Play sound when the pop-up is shown
    const audio = new Audio("/media/order.mp3");
    audio.play();
    setCartItems([]);
    setShowPopup(true);
    setTimeout(() => {
      window.location.href = "/";
      setShowPopup(false);
    }, 4000);
  };

  // Determine if the button should be disabled
  const isButtonDisabled = cartItems.length === 0;

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
        onClick={handleCheckout}
        disabled={isButtonDisabled}
      >
        Checkout
      </button>
      {showPopup && (
        <Popup
          bgcolor={"#46d83f"}
          content={"Thanks for ordering with Swipkart!"}
        />
      )}
    </div>
  );
};

export default Order;
