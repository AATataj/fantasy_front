import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DetailsIcon from '@material-ui/icons/Details';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black', //theme.palette.background.paper,
    color: 'white'
  },
}));

const teams =[
    {   
        division : 'Atlantic',
        teams : [
            'TOR', 'BOS', 'PHI', 'BYK', 'NYK'
        ]
    },
    {   
        division : 'Central',
        teams : [
            'MIL', 'IND', 'CHI', 'DET', 'CLE'
        ]
    },
    {   
        division : 'Southeast',
        teams : [
            'MIA', 'ORL', 'CHA', 'WAS', 'ATL'
        ]
    },
    {   
        division : 'Northwest',
        teams : [
            'DEN', 'OKC', 'UTA', 'POR', 'MIN'
        ]
    },
    {   
        division : 'Pacific',
        teams : [
            'LAL', 'LAC', 'PHX', 'SAC', 'GSW'
        ]
    },
    {   
        division : 'Southwest',
        teams : [
            'HOU', 'DAL', 'MEM', 'SAS', 'NOP'
        ]
    },  
]

function TeamsMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [toggleAtlanticDrawer, setToggleAtlanticDrawer] = React.useState(null);
    const [div, setDiv] = React.useState({
        Atlantic : false,
        Central : false,
        Southeast : false,
        Northwest : false,
        Pacific : false,
        Southwest : false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDiv({ ...div, [anchor]: open });
      };
    
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
   
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      console.log(teams[index].division);
      //props.qType(options[index]);
      setAnchorEl(null);
    };
   
    const handleClose = () => {
      setAnchorEl(null);
    };
     return (
         <React.Fragment>
             <IconButton>
                <List component="nav" aria-label="Device settings">
                    <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    onClick={handleClickListItem}
                    >
                    <DetailsIcon />  
                    <ListItemText primary={teams[selectedIndex].division}/>
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {teams.map((option, index) => (
                    <MenuItem
                        key={option.division}
                        selected={index === selectedIndex}
                        onClick={(event) => toggleAtlanticDrawer(anchor, true)}
                    >
                        {option.division}
                    </MenuItem>
                    ))}
                </Menu>
         </IconButton>
       </React.Fragment>
     );
   
}
export default TeamsMenu;
