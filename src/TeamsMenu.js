import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleDivClick} id="Atlantic">
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
      </Collapse>
    </List>
  );
}