import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Signup } from './pages/Signup'
import { Search } from './components/Search';
import { Card } from './components/Card';
import { Subscription } from './components/Subscription';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Search></Search>
      <Card></Card>
      <Subscription></Subscription>
      <Footer></Footer>
    </>
  );
}

export default App;
