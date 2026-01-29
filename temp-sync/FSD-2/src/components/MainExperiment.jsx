import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const MainExperiment = () => {
  return (
    <BrowserRouter>
       <nav style={{ 
    padding: '15px', 
    background: '#2c3e50', 
    display: 'flex', 
    justifyContent: 'center', // Centers links horizontally
    gap: '30px',
    width: '100%'             // Ensures it spans the full width
}}>
  <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
  <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
  <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
</nav>
          

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainExperiment;