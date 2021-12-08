import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">Contact</div>
      <div className="contact-container">
        <ul>
          <li>
            <div>PHONE</div>
            <div>010-5294-2359</div>
          </li>
          <li>
            <div>EMAIL</div>
            <div>dia_min@naver.com</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
