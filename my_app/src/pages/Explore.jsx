// Explore.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleSearch = () => {
    // Filter items based on the search term
    const filtered = allItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the filtered items state
    setFilteredItems(filtered);
  };

  return (
    <div className="explore-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Explore
      </div>

      <h1>Explore Page</h1>

      {/* Search Section */}
      <div className="search-section">
        <label className="search-label" htmlFor="search">
          Search:
        </label>
        <input
          className="search-input"
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Display filtered items */}
      <ul className="explore-items">
        {filteredItems.map((item) => (
          <li key={item.id} className="explore-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
