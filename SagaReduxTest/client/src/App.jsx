import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import FoxesThunk from './components/FoxesThunk/FoxesThunk';
import Home from './components/Home/Home';
import MyNavBar from './components/MyNavBar/MyNavBar';
import Pets from './components/Pets/Pets';
import PetsSaga from './components/PetsSaga/PetsSaga';
import FoxesSaga from './components/FoxesSaga/FoxesSaga';

function App() {
  return (
    <>
      <MyNavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cats />} path="/cats" />
        <Route element={<Dogs />} path="/dogs" />
        <Route element={<Pets />} path="/petsThunk/:id" />
        <Route element={<PetsSaga />} path="/petsSaga/:id" />
        <Route element={<FoxesThunk />} path="/foxesThunk" />
        <Route element={<FoxesSaga />} path="/foxesSaga" />
      </Routes>
    </>
  );
}

export default App;
