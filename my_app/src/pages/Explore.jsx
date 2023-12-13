// Explore.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';



const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allItems = [
    { id: 1, name: 'Database Management Systems', subjects: [1, 2, 3, 4, 5, 6] },
    { id: 2, name: 'Artificial Intelligence', subjects: [7, 8, 9, 10] },
    { id: 3, name: 'Web Development', subjects: [11, 12, 13, 14, 15] },
    { id: 4, name: 'Operating Systems', subjects: [16, 17, 18, 19, 20] },
    { id: 5, name: 'Mobile App Development', subjects: [21, 22, 23, 24, 25] },
    { id: 6, name: 'Computer Graphics', subjects: [26, 27, 28, 29, 30] },
    { id: 7, name: 'Cybersecurity', subjects: [31, 32, 33, 34, 35] },
    { id: 8, name: 'Data Science', subjects: [36, 37, 38, 39, 40] },
    { id: 9, name: 'Computer Networks', subjects: [41, 42, 43, 44, 45] },
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
    
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Explore
      </div>

      <h1>Explore Page</h1>

   
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

     
      <ul className="explore-items">
        {filteredItems.map((item) => (
          <li key={item.id} className="explore-item">
            <Link to={`/${item.name.replace(/\s+/g, '').toLowerCase()}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
