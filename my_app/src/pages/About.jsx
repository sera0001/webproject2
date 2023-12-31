import React from 'react';
import './About.css'; // Make sure to import the CSS file
import img1 from './pics/img1.png';

const About = () => {
  return (
    <div className="about-container">
      <div className='about-text'>
      <h1>About Us</h1>
      <p>
        Welcome to our project! We are computer science students at Kuwait University, passionate about technology and innovation.
      </p>
      <p>
        Our goal is to provide a platform that helps you bring your projects to life. Whether you're a seasoned developer or just getting started, we're here to support you in your coding journey.
      </p>
      <p>
        Feel free to explore the various features of our platform, connect with other like-minded individuals, and turn your ideas into reality.
      </p>
      <p>
        Happy coding!
      </p>
      </div>
      <div className="about-image">
      <img src={img1} alt="About Us" />
  </div>
    </div>
  );
};

export default About;

