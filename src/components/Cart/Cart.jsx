import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="d-flex shop-cart">
      <h3 className="text-center">Order Summary</h3>
      <div className="d-flex cart-details">
        <p>Selected Items: {props.cart.length}</p>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <p className="total-price">Grand Total: $1559</p>
      </div>
      <div className="cart-button">
        <button className="btn-cart">Clear Cart</button>
        <button className="btn-review">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
