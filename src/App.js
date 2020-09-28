import React from 'react';
import './App.css';
import './NavBar.js';
import './DBquery.js';
import './Welcome';
import { Route, Switch } from 'react-router-dom';
import DBquery from './DBquery.js';
import Welcome from './Welcome.js';
  
function App() {
  return (
    <div className="App">
        <Switch> 
          <Route path ='/DBquery' component={DBquery} />
          <Route path ='/Welcome' component={Welcome} />
        </Switch>
    </div>
  );
}

export default App;
