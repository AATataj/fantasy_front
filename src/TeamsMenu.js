import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';



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
  
  

  const handleClick = (event) => {
    //setOpen(!open);
    const tgt = event.currentTarget.id;
    if (tgt === "Atlantic")
        setOpenAtl(true);
    else if (tgt === "Central")
        setOpenCen(true);
    else if (tgt === "Southeast")
        setOpenSE(true);
    else if (tgt === "Northwest")
        setOpenNW(true);
    else if (tgt === "Pacific")
        setOpenPac(true);
    else if (tgt === "Southwest")
        setOpenSW(true);
    console.log(tgt);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick} id="Atlantic">
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
      <ListItem button onClick={handleClick} id="Central">
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
      <ListItem button onClick={handleClick} id="Southeast">
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
      <ListItem button onClick={handleClick} id="Northwest">
        <ListItemText primary="Northwest" />
        {openNW ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openNW} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse><ListItem button onClick={handleClick} id="Pacific">
        <ListItemText primary="Pacific" />
        {openPac ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPac} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse><ListItem button onClick={handleClick} id="Southwest">
        <ListItemText primary="Southwest" />
        {openSW ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSW} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}