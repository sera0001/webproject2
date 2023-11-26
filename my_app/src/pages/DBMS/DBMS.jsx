import React from 'react';
import { Link } from 'react-router-dom';

const DBMS = () => {
  return (
    <div>
      <h2>Database Management Systems</h2>
      <p>
        Welcome to the Database Management Systems section! Explore the following subjects related to database management:
      </p>

      <ul>
        <li>
          <Link to="/DBMS/event-management">Event Management System</Link>
        </li>
        <li>
          <Link to="/DBMS/recipe-database">Recipe Database</Link>
        </li>
        <li>
          <Link to="/DBMS/student-information-system">Student Information System</Link>
        </li>
        <li>
          <Link to="/DBMS/employee-directory">Employee Directory</Link>
        </li>
        <li>
          <Link to="/DBMS/inventory-management-system">Inventory Management System</Link>
        </li>
      </ul>
    </div>
  );
};

export default DBMS;
