import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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

export default function TeamsMenu() {
  const SubMenu = Menu.SubMenu;
  const [selectedTeam, setSelectedTeam] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.key);
    setSelectedTeam(event.key);

  }
  const menu = (
    <Menu
    // onClick={handleClick}
    style={{ width: 240 }}
    mode="vertical"
  >
    <SubMenu key="sub1" 
    title="Atlantic">
        <Menu.Item key="TOR"  onClick={handleClick}>TOR</Menu.Item>
        <Menu.Item key="BOS"  onClick={handleClick}>BOS</Menu.Item>
        <Menu.Item key="PHI" onClick={handleClick}>PHI</Menu.Item>
        <Menu.Item key="BKY" onClick={handleClick}>BKY</Menu.Item>
        <Menu.Item key="NYK" onClick={handleClick}>NYK</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title="Central">
      <Menu.Item key="MIL" onClick={handleClick}>MIL</Menu.Item>
      <Menu.Item key="IND" onClick={handleClick}>IND</Menu.Item>
      <Menu.Item key="CHI" onClick={handleClick}>CHI</Menu.Item>
      <Menu.Item key="DET" onClick={handleClick}>DET</Menu.Item>
      <Menu.Item key="CLE" onClick={handleClick}>CLE</Menu.Item>
    </SubMenu>
    <SubMenu key="sub3" title="Southeast">
      <Menu.Item key="MIA" onClick={handleClick}>MIA</Menu.Item>
      <Menu.Item key="ORL" onClick={handleClick}>ORL</Menu.Item>
      <Menu.Item key="CHA" onClick={handleClick}>CHA</Menu.Item>
      <Menu.Item key="WAS" onClick={handleClick}>WAS</Menu.Item>
      <Menu.Item key="ATL" onClick={handleClick}>ATL</Menu.Item>
    </SubMenu>
    <SubMenu key="sub4" title="Northwest">
      <Menu.Item key="DEN" onClick={handleClick}>DEN</Menu.Item>
      <Menu.Item key="OKC" onClick={handleClick}>OKC</Menu.Item>
      <Menu.Item key="UTA" onClick={handleClick}>UTA</Menu.Item>
      <Menu.Item key="POR" onClick={handleClick}>POR</Menu.Item>
      <Menu.Item key="MIN" onClick={handleClick}>MIN</Menu.Item>
    </SubMenu>
    <SubMenu key="sub5" title="Pacific">
      <Menu.Item key="LAL" onClick={handleClick}>LAL</Menu.Item>
      <Menu.Item key="LAC" onClick={handleClick}>LAC</Menu.Item>
      <Menu.Item key="PHX" onClick={handleClick}>PHX</Menu.Item>
      <Menu.Item key="SAC" onClick={handleClick}>SAC</Menu.Item>
      <Menu.Item key="GSW" onClick={handleClick}>GSW</Menu.Item>
    </SubMenu>
    <SubMenu key="sub6" title="Southwest">
      <Menu.Item key="HOU" onClick={handleClick}>HOU</Menu.Item>
      <Menu.Item key="DAL" onClick={handleClick}>DAL</Menu.Item>
      <Menu.Item key="MEM" onClick={handleClick}>MEM</Menu.Item>
      <Menu.Item key="SAS" onClick={handleClick}>SAS</Menu.Item>
      <Menu.Item key="NOP" onClick={handleClick}>NOP</Menu.Item>
    </SubMenu>
  </Menu>
  );
  return (
    <React.Fragment> 
  <Dropdown overlay={menu}>
  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    {selectedTeam===null? "Select Team" : selectedTeam} <DownOutlined />
  </a>
  </Dropdown>
  </React.Fragment>
  );
}
