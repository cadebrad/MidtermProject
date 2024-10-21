import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Countries from './pages/Countries';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;