import React, { useState } from 'react';
import './ProductCart.css';

const ProductCart = ({ products }) => {
  const [cart, setCart] = useState([]);

  // Example initial data if products prop is empty
  const displayProducts = products?.length > 0 ? products : [
    { id: 1, name: 'Product 1', category: 'Category 1', cost: 2300 },
    { id: 2, name: 'Product 2', category: 'Category 2', cost: 2300 },
    { id: 3, name: 'Product 3', category: 'Category 2', cost: 2300 },
    { id: 4, name: 'Product 4', category: 'Category 5', cost: 2300 },
    { id: 5, name: 'Product 5', category: 'Category 1', cost: 2300 },
    { id: 6, name: 'Product 6', category: 'Category 2', cost: 2300 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-box">LOGO</div>
        <nav>
          <span>Products</span>
          <span>Add products</span>
          <span className="cart-icon">🛒</span>
        </nav>
      </header>

      <main className="cart-section">
        <div className="cart-header">
          <h2>Add product to cart</h2>
          <div className="cart-status">
            <span className="cart-icon-small">🛒</span>
            <span className="cart-text">{cart.length} Items in cart</span>
          </div>
        </div>

        <div className="product-grid">
          {displayProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <span className="category-badge">{product.category}</span>
              
              <div className="card-footer">
                <span className="price">${product.cost}</span>
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add <span className="btn-cart-icon">🛒</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductCart;
