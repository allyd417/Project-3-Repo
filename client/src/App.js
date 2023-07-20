import React, { useState } from 'react'; // Import the useState hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route and Routes components
import Navbar from './components/navbar'; // Import the Navbar component
import HomePage from './components/homepage'; // Import the HomePage component
import Adopt from './components/adopt'; // Import the Adopt component
import Login from './components/login'; // Import the Login component
import Logout from './components/logout'; // Import the Logout component

function App() {
  const [page, setPage] = useState('HomePage');
  const [user, setUser] = useState(null); // State to manage user authentication

  // Function to handle successful login
  const handleLoginSuccess = (response) => {
    // The response object contains user information after successful login
    setUser(response.profileObj);
  };


  
  return (
    <div>
      <Router>
        <Navbar setPage={setPage} />
        {/* Render the Login component if the user is not logged in */}
        {!user && <Login onSuccess={handleLoginSuccess} />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<Adopt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
