import React from "react";
import "./Product.css";

const Product = (props) => {
  const {
    id,
    img: productImg,
    name: productName,
    price,
    seller: manufacturer,
    ratings,
  } = props.product;
  return (
    <div className="d-flex product">
      <div className="product-inner">
        <img src={productImg} className="product-img" alt={productName} />
        <div className="product-details">
          <h2 className="product-name">
            <a href="#">{productName}</a>
          </h2>
          <p className="product-price">Price: {price}</p>
        </div>
        <div>
          <p className="manufacturer">
            <small>Manufacturer : {manufacturer}</small>
          </p>
          <p className="ratings">
            <small>Ratings : {ratings}</small>
          </p>
        </div>
      </div>
      <button
        className="product-btn"
        onClick={() => props.addToCart(props.product)}
      >
        Add to Cart <span></span>
      </button>
    </div>
  );
};

export default Product;
