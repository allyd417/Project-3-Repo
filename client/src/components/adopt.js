import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adopt() {
  const [animals, setAnimals] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    // Don't fetch animals when the component is initially rendered.
    // We'll wait until the user performs a search instead.
  }, []);

  async function handleSubmit() {
    try {
      const response = await axios.get(`http://localhost:3001/animals?type=${searchType}&location=${searchLocation}`);
      setAnimals(response.data.animals);
      response.data.animals.forEach(animal => {
        console.log('Animal name:', animal.name);
        console.log('Image URLs:', animal.photos.map(photo => photo.medium));
      });

    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  }
  
  function handleSearchChange(event) {
    setSearchType(event.target.value);
  }

  function handleLocationChange(event) {
    setSearchLocation(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchType} onChange={handleSearchChange} placeholder="Search for a type (dog or cat)..." />
      <input type="text" value={searchLocation} onChange={handleLocationChange} placeholder="Enter a location..." />
      <button onClick={handleSubmit}>Search</button>

      {animals.map(animal => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <p>{animal.description}</p>
          {animal.photos && animal.photos[0] ? (
            <img src={animal.photos[0].medium} alt={animal.name} />
          ) : (
            <p>Pictures coming soon</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Adopt;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Adopt() {
//   const [animals, setAnimals] = useState([]);
//   const [searchType, setSearchType] = useState("");

//   useEffect(() => {
//     // Don't fetch animals when the component is initially rendered.
//     // We'll wait until the user performs a search instead.
//   }, []);

//   async function handleSubmit() {
//     try {
//       const response = await axios.get(`http://localhost:3001/animals?type=${searchType}`);
//       setAnimals(response.data.animals);
//       response.data.animals.forEach(animal => {
//         console.log('Animal name:', animal.name);
//         console.log('Image URLs:', animal.photos.map(photo => photo.medium));
//       });

//     } catch (error) {
//       console.error('Error fetching animals:', error);
//     }
//   }
  
//   function handleSearchChange(event) {
//     setSearchType(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={searchType} onChange={handleSearchChange} placeholder="Search for a type (dog or cat)..." />
//       <button onClick={handleSubmit}>Search</button>

//       {animals.map(animal => (
//         <div key={animal.id}>
//           <h2>{animal.name}</h2>
//           <p>{animal.description}</p>
//           {animal.photos && animal.photos[0] ? (
//             <img src={animal.photos[0].medium} alt={animal.name} />
//           ) : (
//             <p>Pictures coming soon</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Adopt;
