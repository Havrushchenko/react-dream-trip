import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Contact } from './pages/Contact';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
