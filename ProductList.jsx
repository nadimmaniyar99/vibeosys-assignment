import React, { useState } from 'react';
import './ProductsList.css';

const ProductsList = ({ products = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic for the search bar
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header - Reused from previous step */}
      <header className="navbar">
        <div className="logo-box">LOGO</div>
        <nav>
          <span className="active">Products</span>
          <span>Add products</span>
          <span className="cart-icon">🛒</span>
        </nav>
      </header>

      <main className="list-section">
        <h2>Products</h2>
        
        <div className="list-controls">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search product by name or category" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="product-count">
            {filteredProducts.length} products
          </div>
        </div>

        {/* Reusable Table Component */}
        <table className="product-table">
          <thead>
            <tr>
              <th colSpan="5" className="table-title">All products</th>
            </tr>
            <tr>
              <th style={{ width: '10%' }}>No.</th>
              <th style={{ width: '30%' }}>Name</th>
              <th style={{ width: '20%' }}>Category</th>
              <th style={{ width: '25%' }}>Expiry date</th>
              <th style={{ width: '15%' }}>Cost</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, index) => (
                <tr key={p.id || index}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.expiryDate}</td>
                  <td>${p.cost}</td>
                </tr>
              ))
            ) : (
              // Empty rows to match the wireframe aesthetic
              [...Array(3)].map((_, i) => (
                <tr key={`empty-${i}`}>
                  <td>&nbsp;</td><td></td><td></td><td></td><td></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ProductsList;
