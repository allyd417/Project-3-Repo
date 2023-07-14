import React, { useState } from 'react';
import './css/homepage.css';

function Navbar({ setPage }) {
  const [active, setActivePage] = useState('HomePage');

  const handleClick = (page) => {
    setPage(page);
    setActivePage(page);
  };

  return (
    <div className="navbar">
      <p
        className={active === 'HomePage' ? 'active' : ''}
        onClick={() => handleClick('HomePage')}
      >
        HomePage
      </p>
      <p
        className={active === 'adopt' ? 'active' : ''}
        onClick={() => handleClick('adopt')}
      >
        Adopt
      </p>
      <p
        className={active === 'locations' ? 'active' : ''}
        onClick={() => handleClick('locations')}
      >
        Locations
      </p>
      <p
        className={active === 'dog-breeds' ? 'active' : ''}
        onClick={() => handleClick('dog-breeds')}
      >
        Dog&nbsp;Breeds
      </p>
      <p
        className={active === 'cat-breeds' ? 'active' : ''}
        onClick={() => handleClick('cat-breeds')}
      >
        Cat&nbsp;Breeds
      </p>
    </div>
  );
}

export default Navbar;