import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

<<<<<<< HEAD
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
=======
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
>>>>>>> 2cb2933e6795a2297f7b1f350c1d849174d61dd3
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

<<<<<<< HEAD
export default Adopt

export default HomePage;
=======
export default Adopt;
>>>>>>> 2cb2933e6795a2297f7b1f350c1d849174d61dd3
