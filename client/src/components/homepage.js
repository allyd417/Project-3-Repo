import React from 'react';
import './css/homepage.css';
import Navbar from './navbar';
const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1 className="homepage-title">STL-Pets</h1>
      </header>
      <main>
        <h2 className="navbar">HomePage</h2>
        <h2 className="navbar">Adopt</h2>
        <h2 className="navbar">Pet Food</h2>
        <h2 className="navbar">Locations</h2>
        <h2 className="navbar">Exotic-Pets</h2>

        <section className="homepage-content">
        <Navbar />
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;