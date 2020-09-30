import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function PlayerQuery(){
    const submit = (event) => {
        // add http get request stuff here.
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
                    <Button variant='contained'  onClick={submit}>
                        SUBMIT
                    </Button>
                </div>
                </Grid>
            </Grid>
        </React.Fragment>
    ); 
} 
export default PlayerQuery