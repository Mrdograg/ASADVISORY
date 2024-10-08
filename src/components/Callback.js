import React from "react";
import "./Callback.css"; // Import the CSS for styling

const Callback = () => {
  return (
    <div className="callback-section">
        <div>
          <h2>Request a Call Back</h2>
          <p>Would you like to speak to one of our Senior Technical advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
        </div>
        <form className="callback-form">
          <input type='text' placeholder="Your Name" required />
          <input type= 'tel' placeholder="10 digit Mobile No." required />
          <input type="submit" value="Submit" />
        </form>
      </div>
  );
};

export default Callback;
