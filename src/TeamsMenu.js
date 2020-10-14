import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const options = [   
    { 
        division : "Atlantic",
        teams : [ "TOR", "BOS", "PHI", "BYK", "NYK"]
    },
    { 
        division : "Central",
        teams : [ "MIL", "IND", "CHI", "DET", "CLE"]
    },
    { 
        division : "Southeast",
        teams : [ "MIA", "ORL", "CHA", "WAS", "ATL"]
    },
    { 
        division : "Northwest",
        teams : [ "DEN", "OKC", "UTA", "POR", "MIN"]
    },
    { 
        division : "Pacific",
        teams : [ "LAL", "LAC", "PHX", "SAC", "GSW"]
    },
    { 
        division : "Southwest",
        teams : [ "HOU", "DAL", "MEM", "SAS", "NOP"]
    }  
]            

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function TeamsMenu() {
  const classes = useStyles();
  const [openAtl, setOpenAtl] = React.useState(false);
  const [openCen, setOpenCen] = React.useState(false);
  const [openSE, setOpenSE] = React.useState(false);
  const [openNW, setOpenNW] = React.useState(false);
  const [openPac, setOpenPac] = React.useState(false);
  const [openSW, setOpenSW] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDivClick = (event) => {
    //setOpen(!open);
    const tgt = event.currentTarget.id;
    if (tgt === "Atlantic")
        setOpenAtl(!openAtl);
    else if (tgt === "Central")
        setOpenCen(!openCen);
    else if (tgt === "Southeast")
        setOpenSE(!openSE);
    else if (tgt === "Northwest")
        setOpenNW(!openNW);
    else if (tgt === "Pacific")
        setOpenPac(!openPac);
    else if (tgt === "Southwest")
        setOpenSW(!openSW);
    console.log(tgt);
  };
  const handleDivItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(options[index].division);
    console.log(options[selectedIndex+1].teams[0]);
    setAnchorEl(null);
    if (options[index].division === "Atlantic")
        setOpenAtl(!openAtl);
    else if (options[index].division === "Central")
        setOpenCen(!openCen);
    else if (options[index].division === "Southeast")
        setOpenSE(!openSE);
    else if (options[index].division === "Northwest")
        setOpenNW(!openNW);
    else if (options[index].division === "Pacific")
        setOpenPac(!openPac);
    else if (options[index].division === "Southwest")
        setOpenSW(!openSW);
  };

  const handleClose = () => {
    //do something
  };

  return (
      <React.Fragment>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem 
            button 
            onClick={handleClickListItem} 
            id='leagueList'
            >
          <ListItemText primary={options[selectedIndex].division} />
      </ListItem>
      <Collapse in={openAtl} timeout="auto" unmountOnExit>
        <List component="div" disablePadding id={options[selectedIndex].division}>
          <ListItem button className={classes.nested}>
            {/* <ListItemText primary="Starred" /> */}
            {options[selectedIndex].teams.map((option, index) => (
            <ListItemText
              key={options[selectedIndex].teams[index]}
              //selected={index === selectedIndex}
              onClick={(event) => handleDivItemClick(event, index)}
            >
              {option.teams[index]}
            </ListItemText>
          ))}
          </ListItem>
        </List>
      </Collapse>
      {/* <ListItem button onClick={handleDivClick} id="Atlantic">
        <ListItemText primary="Atlantic" />
        {openAtl ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAtl} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleDivClick} id="Central">
        <ListItemText primary="Central" />
        {openCen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleDivClick} id="Southeast">
        <ListItemText primary="Southeast" />
        {openSE ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSE} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleDivClick} id="Northwest">
        <ListItemText primary="Northwest" />
        {openNW ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openNW} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse><ListItem button onClick={handleDivClick} id="Pacific">
        <ListItemText primary="Pacific" />
        {openPac ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPac} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse><ListItem button onClick={handleDivClick} id="Southwest">
        <ListItemText primary="Southwest" />
        {openSW ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSW} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
    </List>
    <Menu
        id="tmMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        {options.map((option, index) => (
            <MenuItem
              key={option.division}
              selected={index === selectedIndex}
              onClick={(event) => handleDivItemClick(event, index)}
            >
              {!openAtl && !openCen && !openSE && !openNW && !openPac && !openSW 
              ? "Select Team" 
              : option.division}
            </MenuItem>
          ))}

    </Menu>
    </React.Fragment>   
  );
}