import React from 'react';

  return (
    <div>
      <Dogs />
      <h1>Search for a dog breed:</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" id="search" name="search" onChange={handleInputChange} value={search} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Adopt;