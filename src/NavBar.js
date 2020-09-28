import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function NbaBar(props){ 
    return(
    <React.Fragment>
    <AppBar position="fixed">
        <Toolbar>
            <IconButton 
                edge="start" 
                onClick = {props.handleClick}
                id = "menuScraper"
                aria-controls="scrapersMenu"
                aria-haspopup="true" 
            >
                <MenuIcon/>  
                Data Scraper 
            </IconButton>
            <IconButton
                edge="start" 
                onClick = {props.handleClick}
                id = "menuModels"
                aria-controls="functionsMenu"
                aria-haspopup="true"
            >
                <MenuIcon/>Test Models
            </IconButton>
            <Link to = "/DBQuery" style={{ textDecoration: 'none' }}>
            <IconButton
                edge="start"
                onClick = {props.handleClick}
                id = "dbQuery"
                
            >
                Database Query
            </IconButton>
            </Link>
            <Link to = "/AddFeature" style={{ textDecoration: 'none' }}>
            <IconButton
                edge="start"
                onClick = {props.handleClick}
                id = "addFeature"
            >
                Add Feature
            </IconButton>
            </Link>
            <Menu 
                id = "modelsMenu"
                keepMounted
                anchorEl={props.ModelsAnchor}
                open={Boolean(props.ModelsAnchor)}
                onClose={props.handleClose}        
            >
                <MenuItem id="linReg" onClick={props.handleClick}>Statistical Output</MenuItem>
                <MenuItem id="sentiment" onClick={props.handleClick}>Availability</MenuItem>
                <MenuItem id="reinforcement" onClick={props.handleClick}>AI GM</MenuItem>
            </Menu>
            <Menu 
                id = "scrapersMenu"
                keepMounted
                anchorEl={props.ScraperAnchor}
                open={Boolean(props.ScraperAnchor)} 
                onClose={props.handleClose}        
            >
                <MenuItem id="scrapeAll" onClick={props.handleClick}>Scrape All</MenuItem>
                <MenuItem id="scrapeRoto" onClick={props.handleClick}>Rotoworld</MenuItem>
                <MenuItem id="scrapeBox" onClick={props.handleClick}>Boxscores</MenuItem>
                <MenuItem id="scrapePlay" onClick={props.handleClick}>Play-by-Play</MenuItem>
            </Menu>
            
        </Toolbar>
    </AppBar>
    <Toolbar />
    </React.Fragment>
    );
}
    

