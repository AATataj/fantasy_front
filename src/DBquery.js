import React from 'react';
import './App.css';
import './NavBar.js';
import QueryType from './QueryType.js';
import PlayerQuery from './PlayerQuery';

function DBquery() {

  return (
    <React.Fragment>
      <QueryType />
      <PlayerQuery />
    </React.Fragment>
  );
}

export default DBquery;


