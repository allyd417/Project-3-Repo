// import React, { useState, useEffect } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_PETS } from './utils/queries';
// import styles from './css/Adopt.module.css';
// import { SAVE_PET } from './utils/mutations';
// import AuthService from './utils/auth'; // Import the authService instance

// function Adopt() {
//   const { data } = useQuery(QUERY_PETS);
//   const [animals, setAnimals] = useState([]);
//   const [search, setSearch] = useState('');
//   const [originalPets, setOriginalPets] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const pets = data?.getAllPets || [];
//     setAnimals(pets);
//     setOriginalPets(pets); // Save the original list of pets when the component mounts

//     // Check if the user is logged in when the component mounts
//     const isLoggedIn = AuthService.loggedIN();
//     setLoggedIn(isLoggedIn);
//   }, [data]);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (search.trim() === '') {
//       // If the search input is empty, reset the animals state with the original list of pets
//       setAnimals(originalPets);
//     } else {
//       // Perform the search and update the animals state with the filtered results
//       const filteredAnimals = originalPets.filter(
//         (animal) => animal.species.toLowerCase() === search.toLowerCase()
//       );
//       setAnimals(filteredAnimals);
//     }
//   }

//   // Destructure the mutation function and result from useMutation
//   const [savePet] = useMutation(SAVE_PET);

//   const handleSavePet = async (petId) => {
//     try {
//       const userId = AuthService.getProfile(); // Get the user ID from the authService instance
//       console.log('User ID:', userId); // Verify that the user ID is correctly obtained
//       const { data } = await savePet({
//         variables: { userId: userId, petId }, // Use the obtained user ID
//       });
//       console.log(data.savePet);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearchChange}
//           placeholder="Search for a type (dog or cat)..."
//         />
//         <button type="submit">Search</button>
//       </form>

//       {animals.map((animal) => (
//         <div key={animal._id}>
//           <h2>{animal.name}</h2>
//           <p>{animal.description}</p>
//           <button onClick={() => handleSavePet(animal._id)} disabled={!loggedIn}>
//             Save
//           </button>
//           {animal.image ? (
//             <img src={`/${animal.image}`} alt={animal.name} className={styles['animal-image']} />
//           ) : (
//             <p>Pictures coming soon</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Adopt;


import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from './utils/queries';
import styles from './css/Adopt.module.css';
import { SAVE_PET } from './utils/mutations';
import AuthService from './utils/auth'; // Import the authService instance



function Adopt() {
  const { data } = useQuery(QUERY_PETS);
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState('');
  const [originalPets, setOriginalPets] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const pets = data?.getAllPets || [];
    setAnimals(pets);
    setOriginalPets(pets); // Save the original list of pets when the component mounts

    // Check if the user is logged in when the component mounts
    const isLoggedIn = AuthService.loggedIN();
    setLoggedIn(isLoggedIn);
  }, [data]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.trim() === '') {
      // If the search input is empty, reset the animals state with the original list of pets
      setAnimals(originalPets);
    } else {
      // Perform the search and update the animals state with the filtered results
      const filteredAnimals = originalPets.filter(
        (animal) => animal.species.toLowerCase() === search.toLowerCase()
      );
      setAnimals(filteredAnimals);
    }
  }

  const handleSavePet = async (petId) => {
    try {
      const userId = AuthService.getProfile(); // Get the user ID from the authService instance
      console.log('User ID:', userId); // Verify that the user ID is correctly obtained
      const { data } = await SAVE_PET({
        variables: { userId: userId, petId }, // Use the obtained user ID
      });
      console.log(data.savePet);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a type (dog or cat)..."
        />
        <button type="submit">Search</button>
      </form>

      {animals.map((animal) => (
        <div key={animal._id}>
          <h2>{animal.name}</h2>
          <p>{animal.description}</p>
          <button onClick={() => handleSavePet(animal._id)} disabled={!loggedIn}>
            Save
          </button>
          {animal.image ? (
            <img src={`/${animal.image}`} alt={animal.name} className={styles['animal-image']} />
          ) : (
            <p>Pictures coming soon</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Adopt;
