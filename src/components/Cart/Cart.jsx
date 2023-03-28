import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // console.log(cart);

  let sum = 0;
  let shippingCharge = 0;
  for (const iterator of cart) {
    sum += iterator.price;
    shippingCharge += iterator.shipping;
  }
  const tax = sum * 0.02;
  const grandTotal = sum + shippingCharge + tax;

  return (
    <div className="d-flex shop-cart">
      <h3 className="text-center">Order Summary</h3>
      <div className="d-flex cart-details">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${sum}</p>
        <p>Shipping Charge: ${shippingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p className="total-price">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <div className="cart-button">
        <button className="btn-cart">Clear Cart</button>
        <button className="btn-review">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
