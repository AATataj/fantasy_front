import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function NbaBar(props){
    const [ScraperAnchor, setScraperAnchor] = React.useState(null);
    const [ModelsAnchor, setModelsAnchor] = React.useState(null);
    const [pageLoc, setPageLoc] = React.useState('welcome'); 
    // use effect runs after a state/hook variable is changed and 
    // doesn't wait for a render() call.  
    // the last [pageLoc] parameter is optimizing the useEffect() call
    // by only running it when pageLoc is updated
    // without that, the useEffect() will be called when any part of the 
    // component is updated
    useEffect(() =>{
        console.log("use effect call : " + pageLoc);
    },[pageLoc]);
    const handleClick= (event) => {
        const eventID = event.currentTarget.id;
        if (eventID === "menuScraper"){
            setScraperAnchor(event.currentTarget);
        }
        else if (eventID === "dbQuery"){
            setPageLoc(eventID);
            console.log("pull up db query component");
        }
        else if (eventID === "addFeature"){
            setPageLoc(eventID);
            console.log("pull up add feature component");
        }
        else if (eventID === "scrapeAll"){
            setPageLoc(eventID);
            console.log("pull up scraping page with process of all scrapers");
            handleClose();
        }
        else if (eventID === "scrapeRoto"){
            setPageLoc(eventID);
            console.log("pull up scraping page with process of rotoworld ");
            handleClose();
        }
        else if (eventID === "scrapeBox"){
            setPageLoc(eventID);
            console.log("pull up scraping page with process of boxscores");
            handleClose();
        }
        else if (eventID === "scrapePlay"){
            setPageLoc(eventID);
            console.log("pull up scraping page with process of play-by-plays");
            handleClose();
        }
        else if (eventID === "menuModels"){
            setModelsAnchor(event.currentTarget);
        }
        else if (eventID === "linReg"){
            setPageLoc(eventID);
            console.log("bring up linear regression testing page");
            handleClose();
        }
        else if (eventID === "sentiment"){
            setPageLoc(eventID);
            console.log("bring up sentiment analysis testing page");
            handleClose();
        }
        else if (eventID === "reinforcement"){
            setPageLoc(eventID);
            console.log("bring up reinforcement learning testing page");
            handleClose();
        } 
    };    
    const handleClose = () => {
        setScraperAnchor(null);
        setModelsAnchor(null);
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
                anchorEl={ModelsAnchor}
                open={Boolean(ModelsAnchor)}
                onClose={handleClose}        
            >
                <MenuItem id="linReg" onClick={handleClick}>Statistical Output</MenuItem>
                <MenuItem id="sentiment" onClick={handleClick}>Availability</MenuItem>
                <MenuItem id="reinforcement" onClick={handleClick}>AI GM</MenuItem>
            </Menu>
            <Menu 
                id = "scrapersMenu"
                keepMounted
                anchorEl={ScraperAnchor}
                open={Boolean(ScraperAnchor)}
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
    

