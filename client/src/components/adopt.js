import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adopt() {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchAnimals() {
    try {
      const query = `
        {
          pets {
            name
            species
            age
            image
            description
          }
        }
      `;
      const response = await axios.get('/graphql', {
        params: {
          query,
        },
      });
  
      setAnimals(response.data.data.pets);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  }
  

  // async function fetchAnimals() {
  //   try {
  //     const response = await axios.post('/graphql', {
  //       query: `{
  //         pets {
  //           name
  //           species
  //           age
  //           image
  //           description
  //         }
  //       }`,
  //     });
  
  //     setAnimals(response.data.data.pets);
  //   } catch (error) {
  //     console.error('Error fetching animals:', error);
  //   }
  // }

  useEffect(() => {
    fetchAnimals();
  }, []);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const filteredAnimals = animals.filter(animal => animal.species.toLowerCase() === search.toLowerCase());
    setAnimals(filteredAnimals);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Search for a type (dog or cat)..." />
        <button type="submit">Search</button>
      </form>

      {animals.map(animal => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <p>{animal.description}</p>
          {animal.image ? (
            <img src={animal.image} alt={animal.name} />
          ) : (
            <p>Pictures coming soon</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Adopt;
