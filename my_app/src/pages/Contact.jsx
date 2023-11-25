
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    if (!response.ok) {
      // Handle the error, e.g., setStatus("Error");
      console.error("Error:", response.statusText);
      return;
    }
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  }catch (error){
    console.error("Error:", error.message);
  }
};
  return (
    <form onSubmit={handleSubmit}>
      <div className="Contact">
      <h2 className="title">Contact Us </h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>


      <div className="social-media">
          <p>Contact us on social media:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>


      
      <button type="submit">{status}</button>
      </div>
    </form>

  );
};

export default ContactForm;