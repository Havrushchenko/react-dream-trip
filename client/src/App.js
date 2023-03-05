import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { Card } from './components/Card'

function App() {
  return (
    <>
    <Nav></Nav>
    <Search></Search>
    <Card></Card>
    </>
  );
}

export default App;
