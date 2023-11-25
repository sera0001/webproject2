
import React from 'react';

const ProfileIcon = ({ image, alt = 'Profile Image', size = 40 }) => {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden' }}>
      {image ? (
        <img
          src={image}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        // You can use a placeholder icon or default image if there's no profile image
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd', // Placeholder background color
          }}
        >
          {/* Add your placeholder or default icon here */}
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
