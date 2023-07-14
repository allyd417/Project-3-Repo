import React, { useState } from 'react';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Adopt from './components/adopt';
import Food from './components/food';
import Locations from './components/locations';
import ExoticPets from './components/exotic-pets';

function App() {
  const [page, setPage] = useState('Homepage');

  const renderPage = () => {
    if (page === 'Adopt') {
      return <Adopt />;
    } else if (page === 'Navbar') {
      return <Navbar />;
    } else if (page === 'Exotic-pets') {
      return <ExoticPets />;
    } else if (page === 'Locations') {
      return <Locations />;
    } else if (page === 'Food') {
      return <Food />;
    } else {
      // Default page or handle other cases
      return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;