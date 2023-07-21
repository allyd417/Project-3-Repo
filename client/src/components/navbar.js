import React, { useState } from 'react';
import './css/homepage.css';
import { Link } from 'react-router-dom';

// Navbar component
function Navbar({ setPage }) {
  const [active, setActivePage] = useState('HomePage'); // State to track the active page



  // Handle click event for each navbar item
  const handleClick = (page) => {
    setActivePage(page); // Set the clicked item as active
    setPage(page); // Update the page state in the parent component
  };

  // Render the navbar with clickable items
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="homepage-title">STL-Pets <img src="/images/Spear-Flower.png" alt="Spear" className="Spear" /></h1>{/* Display the main title */}
      </div>
      <div className="nav-links">
        <Link to="/" onClick={() => handleClick('HomePage')}>
        <p
          className={active === 'HomePage' ? 'active' : ''}
        >
          HomePage
        </p> </Link>
        <Link to="/adopt" onClick={() => handleClick('adopt')}>
        <p 
          className={active === 'adopt' ? 'active' : ''}
        >
          Adopt
        </p> </Link>
        
      </div>
    </div>
  );
}

export default Navbar;