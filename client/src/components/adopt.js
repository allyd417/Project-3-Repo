import React, { useEffect, useState } from 'react';

export default function Adopt() {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const tokeResponse = await fetch(`https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.PETFINDER_KEY}&client_secret=${process.env.PETFINDER_SECRET}`);
    const token = tokeResponse.json();
    const response = await fetch(`https://api.petfinder.com/v2/animals?breed=${search}&status=adoptable`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    // data is now ready be parsed by the return JSX
    setSearchData(data);
  }

  console.log(search);

  return (
    <div>
      This is the home page
      <form onSubmit={handleSearchSubmit}>
        {/* contains some form input */}
        <input type="text" id="search" name="search" onChange={handleInputChange} value={search} />
        <button>Submit</button>
      </form>
    </div>
  )
}

// function () {
//   return (
//     <div>
//       <h1>Food</h1>
//       <p>Here is the ExoticPets</p>
//     </div>
//   );
// }
