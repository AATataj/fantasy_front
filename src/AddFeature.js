import React, { useEffect, useState } from 'react';
import './App.css';
import './NavBar.js';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white', //theme.palette.background.paper,
    color: 'black'
  },
}));

export default function AddFeature() {
  
  const [ minions, setMinions ] = useState(null);
  const [ aggregators, setAggs ] = useState(null);
  const [ anchorMinion, setAnchorMinion] = React.useState(null);
  const [ anchorAgg, setAnchorAgg] = React.useState(null)
  const classes = useStyles();
  

  const handleCloseAgg = () => {
    setAnchorAgg(null);
  };
  const handleCloseMinion = () => {
    setAnchorMinion(null);
  } 
  const handleClick = (event) => {
    const eventID = event.currentTarget.id;
    if (eventID === "MinionsMenuButton"){
      setAnchorMinion(event.currentTarget);
      console.log(anchorMinion);
    } 
    if (eventID === "AggsMenuButton"){
      setAnchorAgg(event.currentTarget);
      console.log(anchorAgg);
    }
  }
  return (
    <React.Fragment>
      <IconButton 
        edge="start" 
        onClick = {handleClick}
        id = "MinionsMenuButton"
        aria-controls="scrapersMenu"
        aria-haspopup="true"
        className={classes.root} 
    >
        Minions : {minions}   
      </IconButton>
      <IconButton 
        edge="start" 
        onClick = {handleClick}
        id = "AggsMenuButton"
        aria-controls="scrapersMenu"
        aria-haspopup="true"
        className={classes.root} 
    >
        Aggregators : {aggregators}
      </IconButton>
      <Menu 
        id = "minionsMenu"
        keepMounted
        anchorEl={anchorMinion}
        open={Boolean(anchorMinion)}
        onClose={handleCloseMinion}
      >
        <MenuItem id="Minions1" onClick={() => setMinions(1)}>1</MenuItem>
        <MenuItem id="Minions2" onClick={() => setMinions(2)}>2</MenuItem>
        <MenuItem id="Minions3" onClick={() => setMinions(3)}>3</MenuItem>
        <MenuItem id="Minions4" onClick={() => setMinions(4)}>4</MenuItem>
        <MenuItem id="Minions5" onClick={() => setMinions(5)}>5</MenuItem>
        <MenuItem id="Minions6" onClick={() => setMinions(6)}>6</MenuItem>
        <MenuItem id="Minions7" onClick={() => setMinions(7)}>7</MenuItem>
        <MenuItem id="Minions8" onClick={() => setMinions(8)}>8</MenuItem>
      </Menu>
      <Menu 
        id = "aggregatorMenu"
        keepMounted
        anchorEl={anchorAgg}
        open={Boolean(anchorAgg)}
        onClose={handleCloseAgg}
      >
        <MenuItem id="Aggs1" onClick={() => setAggs(1)}>1</MenuItem>
        <MenuItem id="Aggs2" onClick={() => setAggs(2)}>2</MenuItem>
        <MenuItem id="Aggs3" onClick={() => setAggs(3)}>3</MenuItem>
        <MenuItem id="Aggs4" onClick={() => setAggs(4)}>4</MenuItem>
        <MenuItem id="Aggs5" onClick={() => setAggs(5)}>5</MenuItem>
        <MenuItem id="Aggs6" onClick={() => setAggs(6)}>6</MenuItem>
        <MenuItem id="Aggs7" onClick={() => setAggs(7)}>7</MenuItem>
        <MenuItem id="Aggs8" onClick={() => setAggs(8)}>8</MenuItem>
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

//export default AddFeature;