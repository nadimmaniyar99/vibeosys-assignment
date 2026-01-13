import React, { useState } from 'react';
import './Product.css';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    expiryDate: '',
    cost: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (formData.name && formData.category && formData.expiryDate && formData.cost) {
      setProducts([...products, { ...formData, id: products.length + 1 }]);
      handleReset();
    } else {
      alert("Please fill all fields");
    }
  };

  const handleReset = () => {
    setFormData({ name: '', category: '', expiryDate: '', cost: '' });
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-box">LOGO</div>
        <nav>
          <span>Products</span>
          <span className="active">Add products</span>
          <span className="cart-icon">🛒</span>
        </nav>
      </header>

      <main className="form-section">
        <h2>Add new product</h2>
        
        <div className="input-grid">
          <div className="input-group">
            <label>Name of product</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Alpha numeric only with space allowed"
            />
            <small>Alpha numeric only with space allowed</small>
          </div>

          <div className="input-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Finished">Finished</option>
              <option value="Semi-finished">Semi-finished</option>
              <option value="Raw material">Raw material</option>
            </select>
            <small>Finished/Semi-finished/Raw material</small>
          </div>

          <div className="input-group">
            <label>Expiry date</label>
            <input 
              type="date" 
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            <small>Only future date allowed</small>
          </div>

          <div className="input-group">
            <label>Product cost</label>
            <div className="cost-input-wrapper">
              <span className="currency">$</span>
              <input 
                type="number" 
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                placeholder="3,000"
              />
            </div>
            <small>Only numbers with decimals allowed</small>
          </div>
        </div>

        <div className="button-group">
          <button className="btn-save" onClick={handleSave}>Save</button>
          <button className="btn-reset" onClick={handleReset}>Reset</button>
        </div>
      </main>

      {/* Table Section */}
      <section className="table-section">
        <table>
          <thead>
            <tr>
              <th colSpan="5">All products</th>
            </tr>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Expiry date</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p, index) => (
                <tr key={index}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.expiryDate}</td>
                  <td>${p.cost}</td>
                </tr>
              ))
            ) : (
              <>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
              </>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProductForm;
