import React from 'react';
import { Link } from 'react-router-dom';

export default function MyNavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/cats">Cats</Link>
        <Link className="navbar-brand" to="/dogs">Dogs</Link>
        <Link className="navbar-brand" to="/petsThunk/cats">CatsOneThunk</Link>
        <Link className="navbar-brand" to="/petsThunk/dogs">DogsOneThunk</Link>
        <Link className="navbar-brand" to="/petsSaga/cats">CatsOneSaga</Link>
        <Link className="navbar-brand" to="/petsSaga/dogs">DogsOneSaga</Link>
        <Link className="navbar-brand" to="/foxesThunk">FoxesThunk</Link>
        <Link className="navbar-brand" to="/foxesSaga">FoxesSaga</Link>
      </div>
    </nav>
  );
}
