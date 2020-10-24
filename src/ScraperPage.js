import React, { useEffect } from 'react';
import { Navbar } from 'reactstrap';
import {LinearProgress, Box, Typography} from '@material-ui/core';
import './App.css';
import './NavBar.js';

function ScraperPage(){
    const [progress, setProgress] = React.useState(0);

    const progressRef = React.useRef(() => {});
    
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
            <Navbar />
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
        </React.Fragment>

    );

}
export default ScraperPage