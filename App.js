import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductsList from './ProductsList';
import ProductCart from './ProductCart';
// import './App.css';

function App() {
  // Navigation state: 'add' | 'list' | 'cart'
  const [view, setView] = useState('add');
  
  // Shared state for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Finished', expiryDate: '2026-12-01', cost: '2300' },
    { id: 2, name: 'Product 2', category: 'Raw material', expiryDate: '2026-11-15', cost: '1500' }
  ]);

  // Function to add a new product from ProductForm
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setView('list'); // Automatically navigate to list after saving
  };

  return (
    <div className="App">
      {/* Global Navbar */}
      <header className="navbar">
        <div className="logo-box">LOGO</div>
        <nav>
          <span 
            className={view === 'list' ? 'active' : ''} 
            onClick={() => setView('list')}
          >
            Products
          </span>
          <span 
            className={view === 'add' ? 'active' : ''} 
            onClick={() => setView('add')}
          >
            Add products
          </span>
          <span 
            className={`cart-icon ${view === 'cart' ? 'active' : ''}`}
            onClick={() => setView('cart')}
          >
            🛒
          </span>
        </nav>
      </header>

      {/* Conditional Rendering based on state */}
      <div className="content-area">
        {view === 'add' && (
          <ProductForm onSave={addProduct} />
        )}
        
        {view === 'list' && (
          <ProductsList products={products} />
        )}

        {view === 'cart' && (
          <ProductCart products={products} />
        )}
      </div>
    </div>
  );
}

export default App;
