// SubjectDetail.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SubjectDetail = () => {
  const { itemId, subjectId } = useParams();

  // Fetch additional details for the subject based on itemId and subjectId

  // Example data for subjects
  const subjects = [
    { id: 1, name: 'Subject 1' },
    { id: 2, name: 'Subject 2' },
    { id: 3, name: 'Subject 3' },
    { id: 4, name: 'Subject 4' },
    { id: 5, name: 'Subject 5' },
    { id: 6, name: 'Subject 6' },
    { id: 7, name: 'Subject 7' },
    { id: 8, name: 'Subject 8' },
    { id: 9, name: 'Subject 9' },
    { id: 10, name: 'Subject 10' },
    // Add more subjects as needed
  ];

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/explore">Explore</Link> / <Link to={`/item/${itemId}`}>Item Detail</Link> / Subject Detail
      </div>

      <h2>Subject Detail</h2>
      <p>Details for Subject {subjectId} of Item {itemId}</p>

      {/* Display all subjects for the item */}
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link to={`/item/${itemId}/subject/${subject.id}`}>{subject.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectDetail;

