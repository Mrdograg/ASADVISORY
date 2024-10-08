import React from "react";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Services Section */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Make In India Support</li>
            <li>AG-Mark License</li>
            <li>BIS (ISI MARK) FOR FOREIGN MANUFACTURERS</li>
            <li>BIS HALLMARKING</li>
            <li>LABORATORY RECOGNITION SCHEME (LRS)</li>
            <li>BIS (CRS) REGISTRATION FOR ELECTRONIC PRODUCT</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="https://nabl-india.org/">National Accreditation Board for Testing</a></li>
            <li><a href="https://www.bis.gov.in/">Bureau Of Indian Standards</a></li>
            <li><a href="https://steel.gov.in/">Ministry of Steel</a></li>
            <li><a href="https://www.commerce.gov.in/">Department of Commerce</a></li>
          </ul>
        </div>

        {/* Social Media Presence Section */}
        <div className="footer-social-media">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://www.instagram.com/advisory.as" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/advisory_as" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/advisory-as/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100093266490757" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>© 2024. AS ADVISORY | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
