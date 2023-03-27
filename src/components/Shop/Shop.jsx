import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <section className="section section-shop">
      <div className="container">
        <div className="d-grid shop-grid">
          <div className="shop-products d-grid shop-products-grid">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
          <div className="shop-cart-wrapper">
            <div className="d-flex shop-cart">
              <h3 className="text-center">Order Summary</h3>
              <div className="d-flex cart-details">
                <p>Selected Items: {cart.length}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
