import React, { useEffect } from 'react';
import './App.css';
import './NavBar.js';
import NavBar from './NavBar';
import './DBquery.js';
import './Welcome';
import DBquery from './DBquery.js';
import Welcome from './Welcome.js';
import AddFeature from './AddFeature.js';
import InProgress from './InProgress';
import ScraperPage from './ScraperPage';
import { Route, Switch } from 'react-router-dom';


  
function App() {
  /*
  All this code is unnecessary now that we're using react-router-dom.  
  But, it's important to enough to keep here as it gives an example
  of how to pass state data between components and conditional 
  rendering
  */
  const [ScraperAnchor, setScraperAnchor] = React.useState(null);
  const [ModelsAnchor, setModelsAnchor] = React.useState(null);
  const [scrapeMode, setScrapeMode] = React.useState(null);
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
    console.log("beginning of handleClick : " + eventID);
    if (eventID === "menuScraper"){
        setScraperAnchor(event.currentTarget);
    }
    else if (eventID === "dbQuery"){
        setPageLoc(eventID);
    }
    else if (eventID === "addFeature"){
        setPageLoc(eventID);
    }
    else if (eventID === "scrapeAll"){
        setPageLoc(eventID);
        setScrapeMode(eventID);
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "scrapeRoto"){
        setPageLoc(eventID);
        setScrapeMode(eventID);
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "scrapeBox"){
        setPageLoc(eventID);
        setScrapeMode(eventID);
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "scrapePlay"){
        setPageLoc(eventID);
        setScrapeMode(eventID);
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "menuModels"){
        setModelsAnchor(event.currentTarget);
    }
    else if (eventID === "linReg"){
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "sentiment"){
        setPageLoc(eventID);
        handleClose();
    }
    else if (eventID === "reinforcement"){
        setPageLoc(eventID);
        handleClose();
    } 
    console.log("end of handleClick : " + scrapeMode);
  };    
  const handleClose = () => {
      setScraperAnchor(null);
      setModelsAnchor(null);
  };
  return (
    <div className="App">
        <NavBar handleClick={handleClick} handleClose={handleClose} 
          ModelsAnchor={ModelsAnchor} ScraperAnchor={ScraperAnchor}/>
        <Switch>
          <Route path='/Welcome' component={Welcome} exact />
          <Route path='/DBQuery' component={DBquery} exact />
          <Route path='/AddFeature' component={AddFeature} exact />
          <Route path='/ScrapeAll' component={ScraperPage} exact />
          <Route path='/ScrapeRoto' component={ScraperPage} exact />
          <Route path='/ScrapeBox' component={ScraperPage} exact />
          <Route path='/ScrapePlay' component={ScraperPage} exact />
          <Route path='/InProgress' component={InProgress} exact />
        <div>
          {
            pageLoc === 'welcome' &&
            <Welcome />
          } 
        </div>
        <div>
          {
            pageLoc === 'dbQuery' &&
            <DBquery />
          } 
        </div>
        <div>
          {
            pageLoc === 'addFeature' &&
            <AddFeature />
          } 
        </div>
        </Switch>
    </div>
  );
}

export default App;
