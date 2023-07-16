import React from 'react';
import './css/navbar.css';


const HomePage = () => {
  
  return (
<div>
      
      <div className="homepage-content">
        <h2>
        Welcome to STL-Pets! Simply click on the navigation bar to explore the type of pet you are looking for, and we will provide you with information about the nearest adoption centers, animal shelters, and animal orphanages in the Saint Louis area.
        </h2> {/* Display a welcome message or introduction */}
        <p className="image-container">
          <img src="./images/Dog&Cat-Rest.jpeg" alt="Dog and Cat" className="full-width-image"/>
        </p> {/* Insert the image within the paragraph */}
      </div>
      </div>
  );
};

export default HomePage;