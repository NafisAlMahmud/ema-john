import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, description, ratings, price, quantity, seller } =
    props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>Manufacturer: {seller}</p>
        <p>ratings: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
