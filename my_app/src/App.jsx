// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/login';
import ItemDetail from './pages/ItemDetail';
import SubjectDetail from './pages/SubjectDetail'; // Add the SubjectDetail component
import AI from './pages/AI/AI.jsx';
import DBMS from './pages/DBMS/DBMS.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item/:itemId" element={<ItemDetail />} /> {/* Dynamic route for item detail */}
          <Route path="/item/:itemId/subject/:subjectId" element={<SubjectDetail />} /> {/* Dynamic route for subject detail */}
          <Route path="/ai" element={<AI />} />
          <Route path="/dbms" element={<DBMS />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

