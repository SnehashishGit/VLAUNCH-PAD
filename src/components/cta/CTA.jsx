/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';

const CTA = () => (
  <><div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>To know more</p>
      <h3>Download Brochure.</h3>
    </div>
    <div className="gpt3__cta-btn">
    <a href='BROCHURE.pdf' download="VLAUCHPAD BROCHURE">
      <button type="button">For Brochure Click Here</button>
    </a>
      
    </div>
  </div>

  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Submission End Date</p>
      <h3>Mar 3, 2024, 11:59 PM IST </h3>
    </div>
    <div className="gpt3__cta-btn">
    <Link to='https://docs.google.com/forms/d/e/1FAIpQLScYXvjsch7XV5IeEq3Vz8s32WZTzbUOgJzJnYJZzpO_NvszGQ/viewform'>
    <button type="button" >Submission Link</button>
    </Link>
    
      
    </div>
  </div>

  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Template</p>
      <h3>Submission Template</h3>
    </div>
    <div className="gpt3__cta-btn">
    <a href='Submission_Template.doc' download="Business Plan Submission Template">
         <button type="button">Click Here to Download</button>
    </a>
   
    </div>
  </div>

  </>
  
);

export default CTA;