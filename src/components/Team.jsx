// Importing React library for creating React components
import React from 'react';

// Importing custom components for different routes
import Navbar from './navbar';
import './Team.css';

// Team component
function Team() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="Team" id="Team">
        <div className="container">
          <div className="left">
            <div className="word-container">
              <h1>Meet</h1>
              <h1>Our</h1>
              <h1>Team</h1>
            </div>
            <img
              src="https://i.ibb.co/jGhNcVJ/dragon.png"
              alt="dragon"
              border="0"
            ></img>
          </div>
            <div className="right-container">
              <div className="middle">
                <div className="id">
                  <img
                    src="https://i.ibb.co/sKnSNhd/sinjie-2.png"
                    alt="sinjie"
                    border="0"
                  ></img>
                  <span className="text">
                    <h2>Choo Sin Jie</h2>
                    <h3>CEO & Artistic Director</h3>
                    <p>Brings creativity and cultural insight to the forefront</p>
                  </span>
                </div>
                <div className="id">
                  <img
                    src="https://i.ibb.co/ZhwpHKD/weize-2.png"
                    alt="weize"
                    border="0"
                  ></img>
                  <span className="text">
                    <h2>Wong Wei Ze</h2>
                    <h3>Social Media Strategist</h3>
                    <p>Develops marketing strategies, manages social media account</p>
                  </span>
                </div>
              </div>
              <div className="right">
                <div className="id">
                  <img
                    src="https://i.ibb.co/fD1PHHz/jianing-1.png"
                    alt="jianing"
                    border="0"
                  ></img>
                  <span className="text">
                    <h2>Cheah Jia Ning</h2>
                    <h3>Cultural Ambassador </h3>
                    <p>Preserves & promotes the essence of lion and dragon dance</p>
                  </span>
                </div>
                <div className="id">
                  <img
                    src="https://i.ibb.co/XCRT9Qf/holei-1.png"
                    alt="holei-1"
                    border="0"
                  ></img>
                  <span className="text">
                    <h2>Chiang Ho Lei</h2>
                    <h3>Event Coordinator</h3>
                    <p>Manages the logistics, streamlines execution of performances</p>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the Team component
export default Team;
