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
import EditProfile from './pages/EditProfile.jsx';
import EventManagement from './pages/DBMS/EventManagementSystem.jsx';
import RecipeDatabase from './pages/DBMS/RecipeDatabase';
import StudentInformationSystem from './pages/DBMS/StudentInformationSystem';
import EmployeeDirectory from './pages/DBMS/EmployeeDirectory';
import InventoryManagementSystem from './pages/DBMS/InventoryManagementSystem';

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
          <Route path="/Editprofile" element={<EditProfile/>} />
          <Route path="/item/:itemId" element={<ItemDetail />} /> {/* Dynamic route for item detail */}
          <Route path="/item/:itemId/subject/:subjectId" element={<SubjectDetail />} /> {/* Dynamic route for subject detail */}
          <Route path="/ai" element={<AI />} />
          <Route path="/dbms" element={<DBMS/>} />
        <Route path="/dbms/event-management" element={<EventManagement />} />
        <Route path="/dbms" element={<DBMS />} />
        <Route path="/dbms/event-management" element={<EventManagement />} />
        <Route path="/dbms/recipe-database" element={<RecipeDatabase />} />
        <Route path="/dbms/student-information-system" element={<StudentInformationSystem />} />
        <Route path="/dbms/employee-directory" element={<EmployeeDirectory />} />
        <Route path="/dbms/inventory-management-system" element={<InventoryManagementSystem />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

