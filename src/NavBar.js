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
    const [anchorEli, setAnchorEli] = React.useState(null);
    const handleClick= (event) => {
        const eventID = event.currentTarget.id;
        console.log(eventID);
        if (eventID === "menuScraper"){
            setAnchorEl(event.currentTarget);
        }
        else if (eventID === "dbQuery"){
            console.log("pull up db query component");
        }
        else if (eventID === "addFeature"){
            console.log("pull up add feature component");
        }
        else if (eventID === "scrapeAll"){
            console.log("pull up scraping page with process of all scrapers");
            handleClose();
        }
        else if (eventID === "scrapeRoto"){
            console.log("pull up scraping page with process of rotoworld ");
            handleClose();
        }
        else if (eventID === "scrapeBox"){
            console.log("pull up scraping page with process of boxscores");
            handleClose();
        }
        else if (eventID === "scrapePlay"){
            console.log("pull up scraping page with process of play-by-plays");
            handleClose();
        }
        else if (eventID === "menuModels"){
            setAnchorEli(event.currentTarget);
        }
        else if (eventID === "linReg"){
            console.log("bring up linear regression testing page");
            handleClose();
        }
        else if (eventID === "sentiment"){
            console.log("bring up sentiment analysis testing page");
            handleClose();
        }
        else if (eventID === "reinforcement"){
            console.log("bring up reinforcement learning testing page");
            handleClose();
        } 
    };    
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEli(null);
    }; 
    return(
    <React.Fragment>
    <AppBar position="fixed">
        <Toolbar>
            <IconButton 
                edge="start" 
                onClick = {handleClick}
                id = "menuScraper"
                aria-controls="scrapersMenu"
                aria-haspopup="true" 
            >
                <MenuIcon/>  
                Data Scraper 
            </IconButton>
            <IconButton
                edge="start" 
                onClick = {handleClick}
                id = "menuModels"
                aria-controls="functionsMenu"
                aria-haspopup="true"
            >
                <MenuIcon/>Test Models
            </IconButton>
            <IconButton
                edge="start"
                onClick = {handleClick}
                id = "dbQuery"
                
            >
                Database Query
            </IconButton>
            <IconButton
                edge="start"
                onClick = {handleClick}
                id = "addFeature"
            >
                Add Feature
            </IconButton>
            <Menu 
                id = "modelsMenu"
                keepMounted
                anchorEl={anchorEli}
                open={Boolean(anchorEli)}
                onClose={handleClose}        
            >
                <MenuItem id="linReg" onClick={handleClick}>Statistical Output</MenuItem>
                <MenuItem id="sentiment" onClick={handleClick}>Availability</MenuItem>
                <MenuItem id="reinforcement" onClick={handleClick}>AI GM</MenuItem>
            </Menu>
            <Menu 
                id = "scrapersMenu"
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}        
            >
                <MenuItem id="scrapeAll" onClick={handleClick}>Scrape All</MenuItem>
                <MenuItem id="scrapeRoto" onClick={handleClick}>Rotoworld</MenuItem>
                <MenuItem id="scrapeBox" onClick={handleClick}>Boxscores</MenuItem>
                <MenuItem id="scrapePlay" onClick={handleClick}>Play-by-Play</MenuItem>
            </Menu>
            
        </Toolbar>
    </AppBar>
    <Toolbar />
    </React.Fragment>
    );
}
    

