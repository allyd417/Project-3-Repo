import React, { useState } from 'react';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Adopt from './components/adopt';
import Locations from './components/locations';
import Dogs from './components/dogs';
import Cats from './components/cats';


function App() {
  const [page, setPage] = useState('HomePage');

  const renderPage = () => {
    // Conditionally render different components based on the value of 'page'
    if (page === 'Adopt') {
      return <Adopt />; // Render the 'Adopt' component
    } else if (page === 'Locations') {
      return <Locations />; // Render the 'Locations' component
    } else if (page === 'Dogs') {
      return <Dogs />; // Render the 'Dogs' component
    } else if (page === 'Cats') {
      return <Cats />; // Render the 'Cats' component
    } else {
      return (
        <div>
          <HomePage />; {/* Render the 'HomePage' component by default */}
        </div>
      );
    }
  };


  return (
    <div>
      <h1 className="homepage-title">STL-Pets <img src="/images/Spear-Flower.png" alt="Spear" className="Spear" /></h1>{/* Display the main title */}
      
      <Navbar setPage={setPage} /> {/* Render the Navbar component and pass the 'setPage' function as a prop */}
      <div className="homepage-content">
        <h2>
        Welcome to STL-Pets! Simply click on the navigation bar to explore the type of pet you are looking for, and we will provide you with information about the nearest adoption centers, animal shelters, and animal orphanages in the Saint Louis area.
        </h2> {/* Display a welcome message or introduction */}
        <p className="image-container">
          <img src="./images/Dog&Cat-Rest.jpeg" alt="Dog and Cat" className="full-width-image"/>
        </p> {/* Insert the image within the paragraph */}
      </div>
      {renderPage()} {/* Render the appropriate component based on the 'page' value */}
    </div>
  );
}

export default App;
