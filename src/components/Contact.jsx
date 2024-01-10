// Importing React library for creating React components
import React from 'react';
import Navbar from './navbar';

// Importing custom components for different routes
import './Contact.css';

// Contact component
function Contact() {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='Contact' id='Contact'>
        <div className='outer-container'>
          <div className='container'>
            <div className='left'>
              <h1>Contact Us</h1>
              <div className='content-container'>
                <div className='contact'>
                  <img src="https://i.ibb.co/5BdHxGc/email.png" alt="email" />
                  <span><p>enquiries@roaringlegends.com</p></span>
                </div>

                <div className='contact'>
                  <img src="https://i.ibb.co/mbMVTc2/contact-icon-3.png" alt="contact-icon-3" />
                  <span><p>+6012-3456789</p></span>
                </div>

                <div className='contact'>
                  <img src="https://i.ibb.co/PWB5RvM/contact-icon-4.png" alt="contact-icon-4" />
                  <span>
                    <p>123, Jalan Bahagia,</p>
                    <p>11900 Bayan Lepas,</p>
                    <p>Penang, Malaysia.</p>
                  </span>
                </div>
              </div>
            </div>

            <div className='right'>
              <img src="https://i.ibb.co/B4n3TPk/original-dragon.png" alt="original-dragon" />
            </div>
          </div>

          {/* Embedding Google Maps using an iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.57780816375!2d100.29650869999999!3d5.328349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac05d7e6633cb%3A0xa5aafefa46901774!2s123%2C%20Jalan%20Bahagia%2C%20Bayan%20Baru%2C%2011900%20Bayan%20Lepas%2C%20Pulau%20Pinang!5e0!3m2!1sen!2smy!4v1703435819050!5m2!1sen!2smy" 
            className="custom-iframe"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Exporting the Contact component
export default Contact;
