import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black', //theme.palette.background.paper,
    color: 'white'
  },
}));

const options = [
  'Player Stats Query',
  'Team Stats Query',
  'League Leaders Query',
];

function QueryType(props) {

 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [selectedIndex, setSelectedIndex] = React.useState(1);

 const handleClickListItem = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleMenuItemClick = (event, index) => {
   setSelectedIndex(index);
   console.log(options[index]);
   props.qType(options[index]);
   setAnchorEl(null);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };
  return (
    <div className={classes.root}>
      <React.Fragment>
        <div className={classes.root}>
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <DetailsIcon className={classes.root} />  
            <ListItemText primary={options[selectedIndex]}/>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </React.Fragment>
    </div>
  );
}

export default QueryType;
