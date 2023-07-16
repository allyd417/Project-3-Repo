import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Adopt from './components/adopt';
import Locations from './components/locations';
import Dogs from './components/dogs';
import Cats from './components/cats';

function App() {
  const [page, setPage] = useState('HomePage');


    return (
    <div>
      <Router>

      <Navbar setPage={setPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;


