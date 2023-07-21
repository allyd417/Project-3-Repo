import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

// Sample data for dog breeds in the specified order
const Dogs = () => {
  const [dogBreeds, setDogBreeds] = useState([
    {
      name: 'Affenpinscher',
      image: {
        url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50378099/1/?bust=1625246113&width=600',
      },
    },
  ]);

  useEffect(() => {
    // Function to fetch data from the Petfinder API
    const fetchDogBreeds = async () => {
      const API_KEY = '';
      const tokeResponse = await fetch(`https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`);
      const token = tokeResponse.json();
      const response = await fetch(`https://api.petfinder.com/v2/types/dog/breeds`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Update the dogBreeds state with the data from the API
        setDogBreeds(data.breeds);
      } else {
        console.error('Failed to fetch dog breeds from the Petfinder API');
      }
    };

    fetchDogBreeds();
  }, []);

  return (
    <div>
      <h1>Here is a list of dog breeds. Click on an image to see more information about the breed.</h1>
      <div className="dog-cards">
        {dogBreeds.map((breed, index) => (
          <div key={index} className="dog-card">
            <h2>{breed.name}</h2>
            {/* Wrap the img tag with LazyLoad */}
            <LazyLoad height={200} offset={100}>
              <img src={breed.image.url} alt={breed.name} />
            </LazyLoad>
            {/* You may also use the description and temperament from your original data if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const tokeResponse = await fetch(`https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`);
    const token = tokeResponse.json();
    const response = await fetch(`https://api.petfinder.com/v2/animals?type=dog&breed=${search}&status=adoptable`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    // data is now ready be parsed by the return JSX
    setSearchData(data);
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

export default Adopt

export default HomePage;