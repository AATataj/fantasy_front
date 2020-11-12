import React, { useEffect } from 'react';
import {LinearProgress, Box, Typography} from '@material-ui/core';
import './App.css';
import './NavBar.js';


function ScraperPage(props){
    const [progressRoto, setProgressRoto] = React.useState(0);
    const [progressBox, setProgressBox] = React.useState(0);
    const [progressPlay, setProgressPlay] = React.useState(0);
    
    var websockRoto, websockBox, websockPlay = null;
    useEffect(() => {
        console.log('this is only called when mode changes');

        try {
            var mode = props.mode.replace('s', 'S');
            if ((mode==='ScrapeRoto' || mode==='ScrapeAll') && websockRoto == null){
                websockRoto= new WebSocket(`ws://127.0.0.1:8000/${mode}/`);
                websockRoto.onopen = () => {
                console.log('websocket for rotoworld opened...');
                }
            }
            if ((mode==='ScrapeBox' || mode==='ScrapeAll') && websockBox == null){
                websockBox= new WebSocket(`ws://127.0.0.1:8000/${mode}/`);
                websockBox.onopen = () => {
                console.log('websocket for boxscores opened...');
                }
            }
            if ((mode==='ScrapePlay' || mode==='ScrapeAll') && websockPlay == null){
                websockPlay= new WebSocket(`ws://127.0.0.1:8000/${mode}/`);
                websockPlay.onopen = () => {
                console.log('websocket for plays opened...');
                }
            }
            
            websockRoto.onmessage = function(event) {
                console.log(JSON.parse(event.data).progress);
                setProgressRoto(JSON.parse(event.data).progress);
            }
            websockBox.onmessage = function(event) {
                console.log(JSON.parse(event.data).progress);
                setProgressBox(JSON.parse(event.data).progress);
            }
            websockPlay.onmessage = function(event) {
                console.log(JSON.parse(event.data).progress);
                setProgressPlay(JSON.parse(event.data).progress);
            }
        }
        catch(err) {
            console.log("error opening websocket..." + err.toString());
        }
    }, [props.mode]);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((progress) => {
    //         if (progress === 100) {
    //           return 0;
    //         }
    //         const diff = Math.random() * 10;
    //         return Math.min(progress + diff, 100);
    //       });
    //     }, 500);
    
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, 
    //   []);
    
    return (

        <React.Fragment>
            <br /><br /><br />
            { (props.mode === 'scrapeRoto' || props.mode === 'scrapeAll') &&
            <div id='roto'>
            Rotoworld Scraper Progress
                <Box width = "100%" alignItems="center">
                    <Box>
                        <LinearProgress variant ="determinate" value={progressRoto}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progressRoto.toFixed(1).toString() + "%"}
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
                        <LinearProgress variant ="determinate" value={progressBox}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progressBox.toFixed(1).toString() + "%"}
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
                        <LinearProgress variant ="determinate" value={progressPlay}>
                        </LinearProgress>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {progressPlay.toFixed(1).toString() + "%"}
                        </Typography>
                    </Box>
                </Box>
            </div>
            }
        </React.Fragment>

    );

}
export default ScraperPage