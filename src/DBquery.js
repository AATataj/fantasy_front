import React, { useEffect } from 'react';
import './App.css';
import './NavBar.js';
import QueryType from './QueryType.js';
import PlayerQuery from './PlayerQuery';

function DBquery() {
  const [qType, setQType] = React.useState('welcome'); 
  useEffect(() =>{
    console.log("Query type changed to " + qType);
  },[qType]);
  
  const changeQueryType = (newQueryType) =>{
    setQType(newQueryType);
  }

  return (
    <React.Fragment>
      <QueryType qType={changeQueryType} />
      <div>
          {
            qType === 'Player Stats Query' &&
            <PlayerQuery />
          } 
      </div>
      
    </React.Fragment>
  );
}

export default DBquery;


