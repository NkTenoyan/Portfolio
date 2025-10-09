import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import Button from '../components/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to email or API
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>tenotenoyan@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+94 768 869 551</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Kilinochchi, Sri Lanka</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="submit">
            <Button type="submit" variant="primary">Send Message</Button>
          </div>
        </form>
      </motion.div>
      <div className="foot">
        <Footer/>
      </div>
    </div>
  );
}

export default Contact;
