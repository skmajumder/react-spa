import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    if (products.length !== 0) {
      for (const [id, productQuantity] of Object.entries(storedCart)) {
        const savedProduct = products.find((product) => product.id === id);
        savedProduct.quantity = productQuantity;
        savedCart.push(savedProduct);
      }
      setCart(savedCart);
    }
  }, [products]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <section className="section section-shop">
      <div className="container">
        <div className="d-grid shop-grid">
          {/* Shop */}
          <div className="shop-products d-grid shop-products-grid">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
          {/* Sidebar */}
          <aside className="shop-cart-wrapper">
            <Cart cart={cart}></Cart>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Shop;
