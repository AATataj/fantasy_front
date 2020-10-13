import React, { useEffect } from 'react';
import './App.css';
import './NavBar.js';
import QueryType from './QueryType.js';
import PlayerQuery from './PlayerQuery';
import TeamQuery from './TeamQuery';
import LeadersQuery from './LeadersQuery';

function DBquery() {
  const [qType, setQType] = React.useState('Team Stats Query'); 
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
      <div>
          {
            qType === 'Team Stats Query' &&
            <TeamQuery />
          } 
      </div>
      <div>
          {
            qType === 'League Leaders Query' &&
            <LeadersQuery />
          } 
      </div>
      
    </React.Fragment>
  );
}

export default DBquery;


