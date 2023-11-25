import React, { useState } from 'react';
import ProfileIcon from '../components/ProfileIcon';
import './Editprofile.css';

const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    profileImage: '',
    newPassword: '', // New password field
    confirmPassword: '', // Confirm password field
  });

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, profileImage: URL.createObjectURL(file) });
  };

  const handleNewPasswordChange = (e) => {
    setUser({ ...user, newPassword: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setUser({ ...user, confirmPassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (user.newPassword !== user.confirmPassword) {
      alert('New password and confirm password must match');
      return;
    }

    // Handle form submission, including updating user data and password
    console.log('User Data:', user);
  };

  const handlePhotoButtonClick = () => {
    document.getElementById('profileImageInput').click();
  };

  return (
    <div className='Editprofile'>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="profile-photo-container">
          <ProfileIcon image={user.profileImage} alt={user.name} size={80} />
          <button type="button" onClick={handlePhotoButtonClick} className="change-photo-btn">
            Change Photo
          </button>
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={user.name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={user.email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={user.newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={user.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;