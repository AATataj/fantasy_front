import React, { useEffect, useState } from 'react';
import './App.css';
import './NavBar.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";


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
  const [query, setQuery] = useState(null);
  const [testedFlag, setTestedFlag] = useState(false);
  const [featureName, setFeatureName] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [featureRows, setFeatureRows] = useState([]);

  const handleCloseAgg = () => {
    setAnchorAgg(null);
  };
  const handleCloseMinion = () => {
    setAnchorMinion(null);
  } 
  const handleClick = (event) => {
    const eventID = event.currentTarget.id;
    if (eventID === "MinionsMenuButton"){
      console.log(anchorMinion);
      setAnchorMinion(event.currentTarget);
    } 
    if (eventID === "AggsMenuButton"){
      setAnchorAgg(event.currentTarget);
      console.log(anchorAgg);
    }
  }                                                                 
  const testQuery = (event) => {
    //probs move this flag assignment until after 
    // the function returns with appropriate results
    setTestedFlag(true);
    console.log(query);
    console.log(testedFlag);
  }
  const updateQuery = (event) => {
    setQuery(event.currentTarget.value);
  }
  const updateFeatureName = (event) => {
    setFeatureName(event.currentTarget.value)
  }
  const addFeature = () => {
    console.log("pre");
    console.log(featureRows);
    console.log("post");
    setFeatureRows(featureRows.concat({id:featureRows.length+1, featureName:featureName}));
    console.log(featureRows);

    console.log(featureRows.length);
  }
  const updateStartYear = (event) => {
    setStartYear(event.currentTarget.value);
  }
  const updateEndYear = (event) => {
    setEndYear(event.currentTarget.value);
  }
  const removeFeature = (event) => {

  }
  return (
    <React.Fragment>
      <IconButton 
        onClick = {handleClick}
        id = "MinionsMenuButton"
        //aria-controls="scrapersMenu"
        aria-haspopup="true"
        variant="outlined"
        className={classes.root} 
    >
        Minions : {minions != null ? minions : "None"}   
      </IconButton>
      <IconButton 
        onClick = {handleClick}
        id = "AggsMenuButton"
        //aria-controls="scrapersMenu"
        aria-haspopup="true"
        variant="outlined"
        className={classes.root} 
    >
        Aggregators : {aggregators != null ? aggregators : "None" }
      </IconButton>
      <br/><br/><br/>
      <TextField
        label = "Feature Name"
        id= "featureNameText"
        value = {featureName}
        onChange = {updateFeatureName}
        variant = 'outlined'
      />
      <br/><br/><br/>
      <TextField
        multiline
        rows={8}
        rowsMax = {10}
        label = "Query"
        id= "queryText"
        value = {query}
        onChange = {updateQuery}
        variant = 'outlined'
        style = {{width:500}}
      />
      <br/><br/>
      <TextField
        rows={1}
        rowsMax = {1}
        label = "Start Year"
        id= "startYearField"
        value = {startYear}
        onChange = {updateStartYear}
        variant = 'outlined'
        style = {{width:100, padding:0}}
      />
      <TextField
        label="End Year"
        rows={1}
        rowsMax = {1}
        id= "endYearField"
        value = {endYear}
        onChange = {updateEndYear}
        variant = 'outlined'
        style = {{width:100, padding:0}}
      />
      <IconButton
        onClick = {testQuery}
        id = "testButton"
        className={classes.root}
        variant="outlined"
      >
        Test Query
      </IconButton>
      <IconButton
        onClick = {addFeature}
        id = "featureAddButton"
        className={classes.root}
        variant="outlined"
      >
        Add Feature
      </IconButton>
      <br/><br/><br/>
      <Grid container>
        <Grid item xs={6}>
          <DataGrid
            columns={[{field:'featureName', headerName:'Name'}]}
            rows={featureRows === [] ? {id:1} : featureRows}
            variant='outlined'
            hideFooter
            disableMultipleSelection
            autoHeight
          />
        </Grid>
        <Grid item xs={6}>
        <IconButton
          onClick = {removeFeature}
          id = "featureRemoveButton"
          className={classes.root}
          variant="outlined"
        >
          Remove Feature
        </IconButton>
        </Grid>
        </Grid>
        <br /><br />
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

    </React.Fragment>
  );
}

//export default AddFeature;