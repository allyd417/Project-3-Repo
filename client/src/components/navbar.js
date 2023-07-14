import React, { useState } from 'react';

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
      </p>
      <p
        className={active === 'adopt' ? 'active' : ''}
        onClick={() => handleClick('adopt')}
      >
      </p>
      <p
        className={active === 'petfood' ? 'active' : ''}
        onClick={() => handleClick('petfood')}
      >
      </p>
      <p
        className={active === 'locations' ? 'active' : ''}
        onClick={() => handleClick('locations')}
      >
      </p>
      <p
        className={active === 'exotic-pets' ? 'active' : ''}
        onClick={() => handleClick('exotic-pets')}
      >
      </p>
    </div>
  );
}

export default Navbar;