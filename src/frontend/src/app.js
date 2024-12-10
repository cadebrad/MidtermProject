import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../navbar'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Countries from './pages/Countries';
import Cities from './pages/Cities';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
        <Navbar /> 
        <div className="pt-40">
        <Routes>
          <Route path="/MidtermProject" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
