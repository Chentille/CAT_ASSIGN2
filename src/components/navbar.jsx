// Importing React library for creating React components
import React from "react";
import { Link } from 'react-router-dom';

// Importing custom components for different routes
import './navbar.css'

// Navbar component
function Navbar() {
  return (
    <navbar>
        <Link to="/AboutUs">About Us</Link>
        <Link to='./LionAchievements'>Lion Dance</Link>
        <Link to='./DragonAchievements'>Dragon Dance</Link>
        <Link to="/Team">Meet Our Team</Link>
        <Link to="/Contact">Contact Us</Link>
    </navbar>
  );
}

// Exporting the Navbar component
export default Navbar;
