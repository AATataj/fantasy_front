import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'black', //theme.palette.background.paper,
      color: 'white'
    },
}));

export default function NbaBar(props){ 
    const classes = useStyles();
    return(
    <React.Fragment>
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.root}>
            <Toolbar className={classes.root}>
                <IconButton 
                    edge="start" 
                    onClick = {props.handleClick}
                    id = "menuScraper"
                    aria-controls="scrapersMenu"
                    aria-haspopup="true"
                    className={classes.root} 
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
                    className={classes.root}
                >
                    <MenuIcon/>Test Models
                </IconButton>
            <Link to = "/DBQuery" style={{ textDecoration: 'none' }}>
                <IconButton
                    edge="start"
                    onClick = {props.handleClick}
                    id = "dbQuery"
                    className={classes.root}
                    
                >
                    Database Query
                </IconButton>
            </Link>
            <Link to = "/AddFeature" style={{ textDecoration: 'none' }}>
                <IconButton
                    edge="start"
                    onClick = {props.handleClick}
                    id = "addFeature"
                    className={classes.root}
                >
                    Add Feature
                </IconButton>
            </Link>
            <Link to = "/Welcome" style={{ textDecoration: 'none' }}>
                <HomeIcon className={classes.root}></HomeIcon>
            </Link>
                <Menu 
                    id = "modelsMenu"
                    keepMounted
                    anchorEl={props.ModelsAnchor}
                    open={Boolean(props.ModelsAnchor)}
                    onClose={props.handleClose}        
                >
                    <Link to = "/InProgress" style={{ textDecoration: 'none' }}>
                        <MenuItem id="linReg" onClick={props.handleClick}>Statistical Output</MenuItem>
                    </Link>
                    <Link to = "/InProgress" style={{ textDecoration: 'none' }}>
                        <MenuItem id="sentiment" onClick={props.handleClick}>Availability</MenuItem>
                    </Link>
                    <Link to = "/InProgress" style={{ textDecoration: 'none' }}>
                        <MenuItem id="reinforcement" onClick={props.handleClick}>AI GM</MenuItem>
                    </Link>
                </Menu>
                <Menu 
                    id = "scrapersMenu"
                    keepMounted
                    anchorEl={props.ScraperAnchor}
                    open={Boolean(props.ScraperAnchor)} 
                    onClose={props.handleClose}        
                >
                    <Link to = "/ScrapeAll" style={{ textDecoration: 'none' }}>
                        <MenuItem id="scrapeAll" onClick={props.handleClick}>Scrape All</MenuItem>
                    </Link>
                    <Link to = "/ScrapeRoto" style={{ textDecoration: 'none' }}>
                        <MenuItem id="scrapeRoto" onClick={props.handleClick}>Rotoworld</MenuItem>
                    </Link>
                    <Link to = "/ScrapeBox" style={{ textDecoration: 'none' }}>
                        <MenuItem id="scrapeBox" onClick={props.handleClick}>Boxscores</MenuItem>
                    </Link>
                    <Link to = "/ScrapePlay" style={{ textDecoration: 'none' }}>
                        <MenuItem id="scrapePlay" onClick={props.handleClick}>Play-by-Play</MenuItem>
                    </Link>

                </Menu>
                
            </Toolbar>
        </AppBar>
        <Toolbar />
    </div>
    </React.Fragment>
    );
}
    

