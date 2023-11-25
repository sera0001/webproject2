// ItemDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = () => {
    const allItems = [
        { id: 1, name: 'Database Management Systems', subjects: [1, 2, 3, 4, 5] },
        { id: 2, name: 'Artificial Intelligence', subjects: [6, 7, 8, 9, 10] },
        { id: 3, name: 'Web Development', subjects: [11, 12, 13, 14, 15] },
        { id: 4, name: 'Operating Systems', subjects: [16, 17, 18, 19, 20] },
        { id: 5, name: 'Mobile App Development', subjects: [21, 22, 23, 24, 25] },
        { id: 6, name: 'Computer Graphics ', subjects: [26, 27, 28, 29, 30] },
        { id: 7, name: 'Cybersecurity', subjects: [31, 32, 33, 34, 35] },
        { id: 8, name: 'Data Science', subjects: [36, 37, 38, 39, 40] },
        { id: 9, name: 'Computer Networks', subjects: [41, 42, 43, 44, 45] },
    
      ];
      return (
        <div>
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/explore">Explore</Link> / Item Detail
          </div>
    
          <h2>Item Detail</h2>
    
          {/* Display all items and link to their respective pages */}
          <ul>
            {allItems.map((item) => (
              <li key={item.id}>
                <Link to={`/item/${item.id}`}>{item.name}</Link>
                <ul>
                  {/* Generate links for each subject within the item */}
                  {item.subjects.map((subjectId) => (
                    <li key={subjectId}>
                      <Link to={`/item/${item.id}/subject/${subjectId}`}>
                        {`${item.name} Subject ${subjectId}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ItemDetail;