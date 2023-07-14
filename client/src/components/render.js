import React, { useState } from 'react';
import About from './adopt.js';
import Skills from './exotic-pets.js';
import Projects from './homepage.js';
import Navbar from './navbar.js';
import Resume from './locations.js';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Homepage');

   // Method to render the appropriate page component based on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'Adopt') {
      return <Adopt />;
    }
    if (currentPage === 'Locations') {
      return <Locations />;
    }
    if (currentPage === 'Dog Breeds') {
      return <Dog Breeds />;
    }
    if (currentPage === 'Cats Breeds') {
      return <Cats Breeds />;
    }
    if (currentPage === 'Navbar') {
      return <Navbar />;
    }
     // Default case: Render the Contact component if none of the above conditions are met
    return <Homepage />;
  };

  // Function to handle the page change when a tab is clicked
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass the currentPage and handlePageChange function as props to the NavTabs component */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
       {/* Render the appropriate page component based on the value of currentPage */}
      {renderPage()}
    </div>
  );
}