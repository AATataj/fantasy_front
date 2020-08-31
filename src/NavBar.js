import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function NbaBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };    
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
    <React.Fragment>
    <AppBar position="fixed">
        <Toolbar>
            <IconButton 
                edge="start" 
                onClick = {handleClick}
                id = "menuButton"
                aria-controls="functionsMenu"
                aria-haspopup="true" 
            >
                <MenuIcon/>   
            </IconButton>
            <Menu 
                id = "functionsMenu"
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}        
            >
                <MenuItem onClick={handleClose}>item1</MenuItem>
                <MenuItem onClick={handleClose}>item2</MenuItem>
            </Menu>
            {"The top menu where I'll put links to each feature in the dashboard"}
        </Toolbar>
    </AppBar>
    <Toolbar />
    </React.Fragment>
    );
}
    

