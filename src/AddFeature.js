import React, { useEffect, useState } from 'react';
import './App.css';
import './NavBar.js';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


function AddFeature() {
  
  const [ minions, setMinions ] = useState(null);
  const [ aggregators, setAggs ] = useState(null);
  const [ anchorMinion, setAnchorMinion] = React.useState(null);
  const [ anchorAgg, setAnchorAgg] = React.useState(null)
  


  return (
    <React.Fragment>
      <Menu 
        id = "minionsMenu"
        keepMounted
        anchorEl={anchorMinion}
        open={Boolean(anchorMinion)}
        onClose={handleCloseMinion}
      >
        <MenuItem id="oneMinions" onClick={setMinions(1)}>1</MenuItem>
        <MenuItem id="twoMinions" onClick={setMinions(2)}>2</MenuItem>
        <MenuItem id="threeMinions" onClick={setMinions(3)}>3</MenuItem>
        <MenuItem id="fourMinions" onClick={setMinions(4)}>4</MenuItem>
        <MenuItem id="fiveMinions" onClick={setMinions(5)}>5</MenuItem>
        <MenuItem id="sixMinions" onClick={setMinions(6)}>6</MenuItem>
        <MenuItem id="sevenMinions" onClick={setMinions(7)}>7</MenuItem>
        <MenuItem id="eightMinions" onClick={setMinions(8)}>8</MenuItem>
      </Menu>
      <Menu 
        id = "aggregatorMenu"
        keepMounted
        anchorEl={anchorAgg}
        open={Boolean(anchorAgg)}
        onClose={handleCloseAgg}
      >
        <MenuItem id="oneAggs" onClick={setAggs(1)}>1</MenuItem>
        <MenuItem id="twoAggs" onClick={setAggs(2)}>2</MenuItem>
        <MenuItem id="threeAggs" onClick={setAggs(3)}>3</MenuItem>
        <MenuItem id="fourAggs" onClick={setAggs(4)}>4</MenuItem>
        <MenuItem id="fiveAggs" onClick={setAggs(5)}>5</MenuItem>
        <MenuItem id="sixAggs" onClick={setAggs(6)}>6</MenuItem>
        <MenuItem id="sevenAggs" onClick={setAggs(7)}>7</MenuItem>
        <MenuItem id="eightAggs" onClick={setAggs(8)}>8</MenuItem>
      </Menu>

      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the NBA Fantasy AI Dashboard <br />
            This is the add feature page
          </p>
        </header>
      </div>
    </React.Fragment>
  );
}

export default AddFeature;