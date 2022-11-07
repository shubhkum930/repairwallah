import React from 'react';
import { Route, Routes,redirect } from 'react-router-dom';
import Header from './Component/Header';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';

function App() {
  return (
   <>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
   </>
  );
}

export default App;
