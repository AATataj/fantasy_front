import React from 'react';
import TextField from '@material-ui/core/TextField';


function TeamQuery(){
    return ( 
        <React.Fragment>
            <br />
            Team Stats
            <br/><br/><br/>
            <TextField id="teamName" type="text" 
            label= " Team Name "  
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
        </React.Fragment>
    ); 
} 
export default TeamQuery