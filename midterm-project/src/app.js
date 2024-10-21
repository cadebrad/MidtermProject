import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Import your navbar
import Home from './pages/Home'; // Import the Home component
import About from './pages/About'; // Import the About component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will now display */}
        <Routes>
          {/* Define the routes for your links */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
