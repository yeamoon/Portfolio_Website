import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or just want to connect!</p>
      <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
