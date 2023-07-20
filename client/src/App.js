import React, { useState } from 'react'; // Import the useState hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route and Routes components
import Navbar from './components/navbar'; // Import the Navbar component
import HomePage from './components/homepage'; // Import the HomePage component
import Adopt from './components/adopt'; // Import the Adopt component
import Login from './components/login'; // Import the Login component
import Logout from './components/logout'; // Import the Logout component
import { useEffect } from 'react'; // Import the useEffect hook
import { gapi } from 'gapi-script'; // Import the Google API library

const clientId = '827047395315-f3mgmjgdcesmj1eiifpj96aps8lecfdb.apps.googleusercontent.com'; // Replace with your actual Google Client ID

function App() {
  const [page, setPage] = useState('HomePage');
  const [user, setUser] = useState(null); // State to manage user authentication

  // Function to handle successful login
   useEffect(() => {
    function start() {
      gapi.client.init({
        'clientId': clientId,
        'scope': ""
    })
  };

  gapi.load('client:auth2', start);
});


  
  return (
    <div>
      <Router>
        <Navbar setPage={setPage} />
        {/* Render the Login component if the user is not logged in */}
        <Login />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<Adopt />} />
          {/* Render the Logout component if the user is logged in */}
          <Route path="/logout" element={<Logout onLogout={() => setUser(null)} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
