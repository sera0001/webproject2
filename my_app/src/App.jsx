import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; 


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
         <Route path="/Signup" element={<Signup/>} />
         <Route path='/Login' element={<Login/>} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};


export default App;
