import React, { useState } from 'react'; // Import useState from React
import './Home.css';
import './About.css';
import Footer from './Footer'; // Import the Footer component
import Callback from './Callback';
import QuoteFormModal from './QuoteFormModal';
import s1 from "../images/a.jpg";

const About = () => {
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
      <div>
        <img src={s1} alt=''/>
        <h1>About Us</h1>
      </div>
      
      <p>We are a top consultancy firm in providing technical assistance to manufacturers for getting various certificates or licenses from the government. We serve as a conduit between manufacturers and the government. As the certification process involves a lot of technical aspects which are beyond the understanding of an average person, we support businesses through our technical expertise, quality of service and efficiency. Since we have everything covered, we follow a systematic registration procedure that includes submitting the registration form, paperwork, testing, and inspection if needed. We also interact with the authorities as needed to ensure adequate follow-up and recognition.  

The technical team at AS Advisory stays updated on the most recent rules and regulations and pays close attention to any changes that could influence the work of the client. At AS Advisory, we work to make sure that our customers get accreditation quickly and inexpensively so they can focus on expanding their companies.   

We provide our clients with the appropriate assistance and guidance required to finish the certification process since we are aware of how challenging and time-consuming certification processes are. We firmly believe in exceeding client’s expectations by providing the highest quality of services possible. The success of our business depends on the satisfaction of our clients, so we are committed to assisting them in meeting their compliance requirements. Look no farther than AS Advisory if you need a reliable and responsible certification consultant. The highly experienced technical workforce is on board to support you as you go through the certification process and make sure your goods and services are compliant. Contact us right now to find out more about how AS Advisory may assist your company in obtaining certification. Our Mantra is to make technical compliance certifications easily accessible and inexpensive for everyone. “We make your Approval Simple”.
<br/><br/>
Our History and Our Mission
AS Advisory was established in 2020 with a primary focus on the ISI Mark Certification and CRS Registration schemes of the BIS. Till now, we have assisted more than 100 manufacturers in confirming BIS compliance and are still on the path to aiding many more producers through a coherent system of professional and technical teams. With the primary objective of assisting all importers and producers in conforming to Indian product certification laws, AS Advisory began its journey. Through a combination of competence and leadership, we have been recognised as one of the most trusted brands in compliance management services. We provide comprehensive services, including product certification, testing, and training for a number of product categories in compliance with governmental regulations and directives, with the assistance of our passionate and knowledgeable team, with the main aim of making your Approvals Simple.

Why Choose AS Advisory?
AS Advisory is a single point of contact for all product certifications. We have helped a wide range of companies get their products certified, including those in the toy, glass, foil, and cattle feed industries, among many others. We have so far helped in the issuance of several successful licences. Our clients receive direct assistance from specialists and experts who can offer better solutions to all your compliance-related inquiries, as well as technical and non-technical support. We offer real-time updates on a project that is already running. Our team is effective and efficient at what they do and devotes adequate time to the management and implementation certification processes. Additionally, the staff members always return calls and emails immediately and endeavour to resolve any client grievance as soon as possible.

HOW DO WE WORK?

Professional and Skilled Team:

We operate in an organised manner through the correct channels with a qualified, professional workforce. Any project's success depends on teamwork, and our team is a flawlessly harmonious one.


Proper Project Management:
                                                                                 
We put a little personalization into each project we work on. To ensure that the project is properly organized and managed, a dedicated individual from each department is assigned to project management.

Planning and Implementation:
                                                                      
While a Gantt chart is a two-dimensional representation of a succession of tasks and their relationships, a chronology is a more intuitive way to describe events on a single line. Based on the product and previous experience, we design the Gantt chart to predict the time duration of each stage and the anticipated plan of work.

Efficiency and Effectiveness:
From the creation of relevant documents to the granting of licences, our trained and competent technical personnel assure the effective implementation of all the work and duty involved in certification. We use a proper system of analysis, feedback, and issue resolutions to make sure there are no gaps at any level of the product certification process.</p>
      <Callback/>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default About;
