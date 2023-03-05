import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { Card } from './components/Card';
import { Subscribtion } from './components/Subscribtion';

function App() {
  return (
    <>
    <Nav></Nav>
    <Search></Search>
    <Card></Card>
    <Subscribtion></Subscribtion>
    </>
  );
}

export default App;
