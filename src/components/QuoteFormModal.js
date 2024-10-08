import React from 'react';
import './QuoteFormModal.css';

const QuoteFormModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Get A Quote</h2>
        <form>
          <input type="text" placeholder="Name *" required />
          <input type='tel' placeholder="Contact Number *" required />
          <input type="email" placeholder="E-Mail *" required />
          <input type="text" placeholder="Services You Need *" required />
          <textarea placeholder="Your Message..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteFormModal;
