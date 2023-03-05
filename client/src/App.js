import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Search } from './components/Search';

function App() {
  return (
    <>
    <Nav></Nav>
    <Search></Search>
    </>
  );
}

export default App;
