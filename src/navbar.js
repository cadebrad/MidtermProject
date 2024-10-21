
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
      <img src={logo} alt="Travel Buddy Logo" className="h-16 w-16 mr-2" />
      <h1 className="text-white text-xl font-bold">Travel Buddy</h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/MidtermProject" className="text-white block py-2 px-4">Home</Link></li>
          <li><Link to="/about" className="text-white block py-2 px-4">About</Link></li>
          <li><Link to="/countries" className="text-white block py-2 px-4">Countries</Link></li>
          <li><Link to="/cities" className="text-white block py-2 px-4">Cities</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
