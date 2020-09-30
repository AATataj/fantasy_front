import React from 'react';
import TextField from '@material-ui/core/TextField';


function PlayerQuery(){
    return (
        <React.Fragment>
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
        </React.Fragment>
    ); 
} 
export default PlayerQuery