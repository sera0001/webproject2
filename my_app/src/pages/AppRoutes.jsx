import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ItemDetail from './pages/ItemDetail'; // Import your new ItemDetail page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/item/:itemId" element={<ItemDetail />} /> {/* Add this line for ItemDetail */}
    </Routes>
  );
};

export default AppRoutes;
