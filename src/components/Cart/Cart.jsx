import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const cart = props.cart
  const { cart } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2>chart here</h2>
      <p>selected Item: ${cart.length}</p>
      <p>Total Price ${totalPrice}</p>
      <p>Total Shipping ${totalShipping}</p>
      <p>tax ${tax}</p>
      <h4>Grand Total ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
