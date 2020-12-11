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

var newFeatures = {
  "slaveReplicas" : null,
  "aggregatorReplicas" : null,
  "features" : []
}
export default function AddFeature() {
  
  const [ minions, setMinions ] = useState(null);
  const [ aggregators, setAggs ] = useState(null);
  const [ anchorMinion, setAnchorMinion] = React.useState(null);
  const [ anchorAgg, setAnchorAgg] = React.useState(null)
  const classes = useStyles();
  const [query, setQuery] = useState(null);
  const [testedFlag, setTestedFlag] = useState(false);
  const [featureName, setFeatureName] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [featureRows, setFeatureRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  
  useEffect(() => {
  }, [featureRows]);
  const handleCloseAgg = (event) => {
    setAggs(event.currentTarget.id.charAt(event.currentTarget.id.length-1));
    setAnchorAgg(null);
  };
  const handleCloseMinion = (event) => {
    setMinions(event.currentTarget.id.charAt(event.currentTarget.id.length-1));
    setAnchorMinion(null);
  } 
  const handleClick = (event) => {
    const eventID = event.currentTarget.id;
    if (eventID === "MinionsMenuButton"){
      setAnchorMinion(event.currentTarget);
    } 
    if (eventID === "AggsMenuButton"){
      setAnchorAgg(event.currentTarget);
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
    for(var i=0; i<featureRows.length; i++){
      if (featureRows[i].featureName===featureName){
        return;
      }
    }
    setFeatureRows(featureRows.concat({id:featureRows.length+1, featureName:featureName}));
    
    newFeatures.slaveReplicas = parseInt(minions);
    newFeatures.aggregatorReplicas = parseInt(aggregators);
    var newFeature = {featureName : featureName, query : query, startYear : parseInt(startYear), endYear : parseInt(endYear)};
    newFeatures.features.push(newFeature);
    console.log(newFeatures.features.length);
    
  }
  const updateStartYear = (event) => {
    setStartYear(event.currentTarget.value);
  }
  const updateEndYear = (event) => {
    setEndYear(event.currentTarget.value);
  }
  const setSelection = (event) =>{
    setSelectedRow(parseInt(event.rowIds[0])-1);
  }
  const removeFeature = (event) => {
    if (selectedRow != null){
      //featureRows.splice(selectedRow,1);
      var newarr = [];
      var newfeats = [];
      for (var i=0; i<featureRows.length; i++){
        if (i!==selectedRow){
          newarr.push(featureRows[i]);
          newfeats.push(newFeatures.features[i]);
        }
      }
      setFeatureRows(newarr);
      newFeatures.features=newfeats;
    }
    console.log(newFeatures);
    setSelectedRow(null);
  }
  const runFeatures = () => {
    if(testedFlag){
      //set up the pipe to the backend
      //run the pipeline here.
    }
    else {
      //return some error about untested features here
      return;
    }
  }
  return (
    <React.Fragment>
      <IconButton 
        onClick = {handleClick}
        id = "MinionsMenuButton"
        aria-haspopup="true"
        variant="outlined"
        className={classes.root} 
    >
        Minions : {minions != null ? minions : "None"}   
      </IconButton>
      <IconButton 
        onClick = {handleClick}
        id = "AggsMenuButton"
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
            onSelectionChange={setSelection}
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
        <IconButton
          onClick = {runFeatures}
          id = "featureRunButton"
          className={classes.root}
          variant="outlined"
          
        ></IconButton>  
      <Menu 
        id = "minionsMenu"
        keepMounted
        anchorEl={anchorMinion}
        open={Boolean(anchorMinion)}
        /*onClose={handleCloseMinion}*/
      >
        <MenuItem id="Minions1" onClick={handleCloseMinion}>1</MenuItem>
        <MenuItem id="Minions2" onClick={handleCloseMinion}>2</MenuItem>
        <MenuItem id="Minions3" onClick={handleCloseMinion}>3</MenuItem>
        <MenuItem id="Minions4" onClick={handleCloseMinion}>4</MenuItem>
        <MenuItem id="Minions5" onClick={handleCloseMinion}>5</MenuItem>
        <MenuItem id="Minions6" onClick={handleCloseMinion}>6</MenuItem>
        <MenuItem id="Minions7" onClick={handleCloseMinion}>7</MenuItem>
        <MenuItem id="Minions8" onClick={handleCloseMinion}>8</MenuItem>
      </Menu>
      <Menu 
        id = "aggregatorMenu"
        keepMounted
        anchorEl={anchorAgg}
        open={Boolean(anchorAgg)}
        // onClose={handleCloseAgg}
      >
        <MenuItem id="Aggs1" onClick={handleCloseAgg}>1</MenuItem>
        <MenuItem id="Aggs2" onClick={handleCloseAgg}>2</MenuItem>
        <MenuItem id="Aggs3" onClick={handleCloseAgg}>3</MenuItem>
        <MenuItem id="Aggs4" onClick={handleCloseAgg}>4</MenuItem>
        <MenuItem id="Aggs5" onClick={handleCloseAgg}>5</MenuItem>
        <MenuItem id="Aggs6" onClick={handleCloseAgg}>6</MenuItem>
        <MenuItem id="Aggs7" onClick={handleCloseAgg}>7</MenuItem>
        <MenuItem id="Aggs8" onClick={handleCloseAgg}>8</MenuItem>
      </Menu>

    </React.Fragment>
  );
}

//export default AddFeature;