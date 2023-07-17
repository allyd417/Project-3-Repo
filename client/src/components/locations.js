import React from 'react';


function Locations() {
  const shelters = [
    {
      name: 'Shelter 1',
      address: '123 Main Street',
      phoneNumber: '555-1234'
    },
    {
      name: 'Shelter 2',
      address: '456 Elm Street',
      phoneNumber: '555-5678'
    },
    // Add more shelters as needed
  ];

  return (
    <div>
      <h1>Locations</h1>
      {shelters.map((shelter, index) => (
        <div key={index}>
          <h2>{shelter.name}</h2>
          <p>Address: {shelter.address}</p>
          <p>Phone Number: {shelter.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default Locations;
