import React from "react";
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contactComponent'>
      
      <div className='contactForm'>
        <iframe
          title='form'
          src="https://services.cognitoforms.com/f/1nsywmJh4UC1cJ4bd3gokQ?id=1"
          frameborder="0"
          scrolling="yes"
          seamless="seamless"
          height="555"
          width="100%"
        ></iframe>
        <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
      </div>
    </div>
  );
};

export default Contact;
