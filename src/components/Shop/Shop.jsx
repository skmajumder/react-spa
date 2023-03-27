import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="section-shop">
      <div className="container">
        <div className="d-grid shop-grid">
          <div className="shop-products">
          
          </div>
          <div className="shop-cart">
            <h4>Shop cart</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
