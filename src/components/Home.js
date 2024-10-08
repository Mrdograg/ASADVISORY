import React, { useState, useEffect } from 'react';
import './Home.css';
import QuoteFormModal from './QuoteFormModal';
import Footer from './Footer'; // Import the Footer component
import { useNavigate } from 'react-router-dom';
import Callback from './Callback';
import ISI from "../images/ISI.png";
import crs from "../images/crs.png";
import fmcs from "../images/FMCS.png";
import wi from "../images/wifi.png";
import iso from "../images/iso.png";
import hallmark from "../images/hallmark.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to open the modal after 4 seconds when the component mounts
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowMoreClick = () => {
    navigate('/our-services');
  };

  const handleExploreClick = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      {/* Left side buttons */}
      <div className="left-buttons">
        <a href="tel:9319530759" className="call-button">
          <img src={require('../images/call.png')} alt="Call" />
        </a>
        <a href="https://wa.me/9319530759" className="whatsapp-button">
          <img src={require('../images/whtsapp.png')} alt="WhatsApp" />
        </a>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>AS Advisory</h1><h2>Trusted Partner for Compliance Solutions.</h2>
        <p>Get your FREE Consultation here !! <a href="https://wa.me/9319530759">
          <img src={require('../images/DIAL.png')} alt="DIAL" />
        </a></p>
        <button className="lets-talk-button" onClick={handleOpenModal}>
          Let’s Talk
        </button>
        <p className="start-project">*Start Your Project With Us Today!</p>
      </div>

      {/* Our Services section */}
      <div className="our-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <ul className="services-left">
            <li><img src={ISI} alt="services1" className='services-list-BarImg' />
            Product Certification scheme (ISI Mark) Bureau of Indian Standard (BIS) is a national accreditation organisation (or government authority). It was established by Bureau of Indian Standard Act, 2016</li>
            <li><img src={fmcs} alt="services1" className='services-list-BarImg' />Foreign Manufacturers Certification Scheme
            Bureau of Indian Standards (BIS) is primary objective is to ensure the quality, safety, and reliability of imported products sold within the Indian market.</li>
            <li><img src={crs} alt="services1" className='services-list-BarImg' />CRS(Compulsory Registration Scheme-BIS)
            Under the Department of Consumer Affairs, Ministry of Consumers Affairs, Food, and Public Distribution, the Bureau of Indian Standard (BIS)</li>
          </ul>
          <ul className="services-right">
            <li><img src={wi} alt="services1" className='services-list-BarImg' />Wireless Planning and Coordination (WPC)
            WPC ETA Approval is a certification process implemented by the Wireless Planning and Coordination</li>
            <li><img src={hallmark} alt="services1" className='services-list-BarImg' />BIS hallmarking
            The BIS hallmark is a certification mark that signifies that the precious metal article has undergone testing and meets the specified quality standards set by the BIS.</li>
            <li><img src={iso} alt="services1" className='services-list-BarImg' />International Organization for Standardization
            ISO registration refers to the process of obtaining certification from ISO for a particular management system standard.</li>

          </ul>
        </div>
        <button className="show-more-button" onClick={handleShowMoreClick}>Show More</button>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>
        AS Advisory is a single point of contact for all product certifications. We have helped a wide range of companies get their products certified, including those in the toy, glass, foil, and cattle feed industries, among many others. We have so far helped in the issuance of several successful licences. Our clients receive direct assistance from specialists and experts who can offer better solutions to all your compliance-related inquiries, as well as technical and non-technical support. We offer real-time updates on a project that is already running. Our team is effective and efficient at what they do and devotes adequate time to the management and implementation certification processes. Additionally, the staff members always return calls and emails immediately and endeavour to resolve any client grievance as soon as possible.</p>
        <button className="explore-button" onClick={handleExploreClick}>Explore</button>
      </div>

      {/* Right side "Get A Quote" button */}
      <div className="get-quote">
        <button onClick={handleOpenModal}>
          Get A Quote
        </button>
      </div>

      {/* Callback Section */}
      <Callback/>

      <div className="contact-us-section">
        <div className="contact-info-left">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through the following contact details:</p>
          <ul>
            <li><strong>Phone:</strong> +91-9319530759</li>
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

      {/* Modal */}
      {isModalOpen && <QuoteFormModal onClose={handleCloseModal} />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
