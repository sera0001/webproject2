import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Signin" element={<Signin/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};


export default App;
