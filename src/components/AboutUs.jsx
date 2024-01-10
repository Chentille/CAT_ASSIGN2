// Importing React library for creating React components
import React from 'react';
import { Link } from 'react-router-dom';

// Importing custom components for different routes
import Navbar from "./navbar";
import './AboutUs.css';

// AboutUs component
function AboutUs() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="AboutUs" id="AboutUs">
        <div className="container">
          <div className="left">
            <div className='left-upper'>
              <img src="https://i.ibb.co/hBdT0bq/border-top.png" className='img' alt="border-top" />
              <h1>Roaring Legends</h1>
              <br />
              <h2>Crafting Celebrations,</h2>
              <h2>Creating Legends</h2>
              <div className='wrappers'>
                <div className='left-down'>
                  <div className='sub'><Link to="/DragonAchievements">Dragon Dance</Link></div>
                </div>
                <div className='left-down'>
                  <div className='sub'><Link to="/LionAchievements">Lion Dance</Link></div>
                </div>
              </div>
              <img src="https://i.ibb.co/WfXS8Qg/border-bottom.png" className='img' alt="border-bottom" />
            </div>
          </div>
          <div className="right">
            <img src="https://i.ibb.co/sVsRBHt/dragon-lion-1.png" alt="dragon-lion-1" />
          </div>
        </div>
        <div className="container2">
          <div className='left2'>
            <img src="https://i.ibb.co/hfhNPy2/lion-1.png" alt="lion-1" />
          </div>
          <div className='right2'>
            <div className='word-container'>
              <h1>About Us</h1>
              <p>Welcome to Roaring Legends Entertainment, where traditions meet spectacle!</p>
              <p>We specialize in professional lion dance and dragon performances, adding a
                touch of magic to your events and celebrations no matter it's a Chinese New Year
                celebration, a grand opening, or any festive event.</p>
              <p>Join us in creating memories that roar with the spirit of joy and prosperity!</p>
            </div>
          </div>
        </div>
        <section className="section3">
          <div className='content-wrapper'>
            <img src="https://i.ibb.co/mhtZL3H/lion-3.png" className='lion3' alt="lion-3" />
            <div className='blue-container'>
              <h1 className="text31">Mission</h1>
              <p className="text32">Revitalize Chinese cultural traditions through captivating lion dance and dragon performances, fostering joy and cultural appreciation at every celebration.</p>
            </div>
          </div>
          <div className='content-wrapper'>
            <div className='blue-container1'>
              <h1 className="text31">Vision</h1>
              <p className="text32">Become the global leader in authentic and enchanting lion and dragon dance performances, promoting cultural diversity and preserving the essence of Chinese traditions.</p>
            </div>
            <img src="https://i.ibb.co/ccfCqfH/lion-4.png" className='lion4' alt="lion-4" />
          </div>
        </section>
      </div>
    </div>
  );
}

// Exporting the AboutUs component
export default AboutUs;