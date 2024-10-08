import React, { useState } from 'react'; // Import useState from React
import QuoteFormModal from './QuoteFormModal';
import Footer from './Footer';
import Callback from './Callback';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Left side buttons */}
      <div className="left-buttons">
        <a href="tel:9319530759" className="call-button">
          <img src={require('../images/call.png')} alt="Call" />
        </a>
        <a href="https://wa.me/9319530759" className="whatsapp-button">
          <img src={require('../images/whtsapp.png')} alt="WhatsApp" />
        </a>
      </div>
      <div className="get-quote">
        <button onClick={handleOpenModal}>
          Get A Quote
        </button>
      </div>
      {isModalOpen && <QuoteFormModal onClose={handleCloseModal} />}
      <h1>Contact Us</h1>
      <p>Get in touch with us at AS ADVISORY.</p>
      <div className="contact-us-section">
        <div className="contact-info-left">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through the following contact details:</p>
          <ul>
          <li><li><strong>Phone:</strong> +91-9319530759</li>+91-9355670759</li>
            <li><strong>Email:</strong> info@asadvisory.in</li>
            <li><strong>Address:</strong> A-86 KH NO. 346 KESHAV NAGAR <br/> NEW DELHI-110036</li>
          </ul>
        </div>
        <div className="map-container">
          <iframe
            title="AS Advisory Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d111859.35436896424!2d77.240521!3d28.820848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d006a66d51873%3A0x5e9900d9b39ec3b5!2sKeshav%20Nagar%2C%20Ibrahimpur%2C%20Delhi!5e0!3m2!1sen!2sin!4v1727160662353!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Callback/>
      <Footer/>
    </div>
  );
};

export default Contact;
