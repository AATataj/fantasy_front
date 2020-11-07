import React, { useEffect } from 'react';
import { Navbar } from 'reactstrap';
import {LinearProgress, Box, Typography} from '@material-ui/core';
import './App.css';
import './NavBar.js';


function ScraperPage(props){
    const [progress, setProgress] = React.useState(0);
    var mode = null;
        
    const progressRef = React.useRef(() => {});
    if (props.mode && (!mode)){
        try {
            mode = props.mode.replace('s', 'S');
            //console.log('ws://127.0.0.1:8000/'+mode+'/');
            const websock = new WebSocket(`ws://127.0.0.1:8000/${mode}/`);
            websock.onopen = () => {
               console.log('connected');
            }
        }
        catch(err) {
            console.log("error opening websocket...");
        }
        
    }

    

    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((progress) => {
            if (progress === 100) {
              return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(progress + diff, 100);
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, 
      []);
    
    return (

        <React.Fragment>
            <br /><br /><br />
            { (props.mode === 'scrapeRoto' || props.mode === 'scrapeAll') &&
            <div id='roto'>
            Rotoworld Scraper Progress
                <Box width = "100%" alignItems="center">
                    <Box>
                        <LinearProgress variant ="determinate" value={progress}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progress.toFixed(1).toString() + "%"}
                        </Typography>
                    </Box>
                </Box>
                <br /><br /><br />           
            </div>
            }
            { (props.mode === 'scrapeBox' || props.mode === 'scrapeAll') &&
            <div id='boxscores'>
            Boxscores Scraper Progress
                <Box width = "100%" alignItems="center">
                    <Box>
                        <LinearProgress variant ="determinate" value={progress}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progress.toFixed(1).toString() + "%"}
                        </Typography>
                    </Box>
                </Box>
                <br /><br /><br />
            </div>
            }
            { (props.mode === 'scrapePlay' || props.mode === 'scrapeAll') &&
            <div id='plays'>
            Play-by-Play Scraper Progress
                <Box width = "100%" alignItems="center">
                    <Box>
                        <LinearProgress variant ="determinate" value={progress}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progress.toFixed(1).toString() + "%"}
                        </Typography>
                    </Box>
                </Box>
            </div>
            }
        </React.Fragment>

    );

}
export default ScraperPage