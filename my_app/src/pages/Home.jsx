/// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pics from './pics/home.png';
const Home = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate('/signup');
  };
  const handleAboutClick = () => {
    navigate('/About');
  };

  return (
    <div className='row'>
      <div className='column1'>
        <h1>Welcome to ProjectSpire!</h1>
        <p>
          Here's your inspiration to code, innovate, and bring your projects to life. Let's begin the journey together!
        </p>
         <div className='button-container'>
        <button onClick={handleJoinUsClick}>Join Us!</button>
        <button onClick={handleAboutClick}>About Us!</button>
        </div>
      </div>
      <div className='column2'>
        <img src={pics} alt='ProjectSpire' />
      </div>
    </div>
  );
};

export default Home;
