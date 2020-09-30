import React from 'react';
import TextField from '@material-ui/core/TextField';


function LeadersQuery(){
    return ( 
        <React.Fragment>
            <br />
            League Leaders Stats
            <br/><br/><br/>
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
export default LeadersQuery