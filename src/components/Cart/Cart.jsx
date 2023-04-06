import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const cart = props.cart
  const { cart, handleClearCart } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2>chart here</h2>
      <p>selected Item: {quantity}</p>
      <p>Total Price ${totalPrice}</p>
      <p>Total Shipping ${totalShipping}</p>
      <p>tax ${tax}</p>
      <h4>Grand Total ${grandTotal}</h4>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
