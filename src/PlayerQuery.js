import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from './EnhancedTable.js';




function PlayerQuery(){
    const submit = (event) => {
        // add http get request stuff here.
        var requestData = {};
        requestData.name = document.getElementById('playerName').value;
        requestData.startDate = document.getElementById('startDate').value;
        requestData.endDate = document.getElementById('endDate').value;
        requestData.playerID = parseInt(document.getElementById('playerID').value);
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type': 'application/json', 
                    },
            body : JSON.stringify(requestData)
        };
        console.log(JSON.stringify(requestOptions));
        // this will likely change as it's going to handle the response as well.
        // but for now, I've verified the body of the post request in postman
        fetch('http://127.0.0.1:8000/dbQuery/', requestOptions)
            .then(response => console.log(response.json()))
            .then(data => console.log("this is filler"));


    };
    return ( 
        <React.Fragment>
            <br />
            Individual Player Stats
            <br/><br/><br/>
            <TextField id="playerName" type="text" 
            label= " Player Name "  
            />
            <TextField id="startDate" 
            type="date" 
            helperText="default 1st career game"
            label="Start Date"
            InputLabelProps={{ shrink: true }} 
            />   
            <TextField id="endDate" 
            type="date"  
            helperText="default is latest game"
            label="End Date"
            InputLabelProps={{ shrink: true }} 
            />  
            <TextField id="playerID" type="text" 
            label= " Player ID "  
            />
            <br />
            <Grid container spacing={4}>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={3}>
                <div style={{ position: 'left' }}>
                    <Button variant='contained'  onClick={(event) => submit(event)}>
                        SUBMIT
                    </Button>
                </div>
                </Grid>
            </Grid>
        <EnhancedTable />
        </React.Fragment>
    ); 
} 
export default PlayerQuery