import React, {useState, useEffect} from 'react';
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

export default function TeamsMenu(props) {
  const SubMenu = Menu.SubMenu;
  //const [selectedTeam, setSelectedTeam] = React.useState(null);
  const selectedTeam = props.selectedTeam;
  const chooseTeam = props.chooseTeam;
  const otherSelected = props.otherSelected;

  useEffect(()=>{
    console.log("in useEffect()");

  },[selectedTeam, otherSelected])

  const menu = (
    <Menu
    style={{ width: 240 }}
    mode="vertical"
  >
    <SubMenu key="sub1" 
    title="Atlantic">
        <Menu.Item key="TOR"  onClick={chooseTeam} disabled={otherSelected==="TOR"? true : false}>TOR</Menu.Item>
        <Menu.Item key="BOS"  onClick={chooseTeam} disabled={otherSelected==="BOS"? true : false}>BOS</Menu.Item>
        <Menu.Item key="PHI" onClick={chooseTeam} disabled={otherSelected==="PHI"? true : false}>PHI</Menu.Item>
        <Menu.Item key="BKY" onClick={chooseTeam} disabled={otherSelected==="BKY"? true : false}>BKY</Menu.Item>
        <Menu.Item key="NYK" onClick={chooseTeam} disabled={otherSelected==="NYK"? true : false}>NYK</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title="Central">
      <Menu.Item key="MIL" onClick={chooseTeam} disabled={otherSelected==="MIL"? true : false}>MIL</Menu.Item>
      <Menu.Item key="IND" onClick={chooseTeam} disabled={otherSelected==="IND"? true : false}>IND</Menu.Item>
      <Menu.Item key="CHI" onClick={chooseTeam} disabled={otherSelected==="CHI"? true : false}>CHI</Menu.Item>
      <Menu.Item key="DET" onClick={chooseTeam} disabled={otherSelected==="DET"? true : false}>DET</Menu.Item>
      <Menu.Item key="CLE" onClick={chooseTeam} disabled={otherSelected==="CLE"? true : false}>CLE</Menu.Item>
    </SubMenu>
    <SubMenu key="sub3" title="Southeast">
      <Menu.Item key="MIA" onClick={chooseTeam} disabled={otherSelected==="MIA"? true : false}>MIA</Menu.Item>
      <Menu.Item key="ORL" onClick={chooseTeam} disabled={otherSelected==="ORL"? true : false}>ORL</Menu.Item>
      <Menu.Item key="CHA" onClick={chooseTeam} disabled={otherSelected==="CHA"? true : false}>CHA</Menu.Item>
      <Menu.Item key="WAS" onClick={chooseTeam} disabled={otherSelected==="WAS"? true : false}>WAS</Menu.Item>
      <Menu.Item key="ATL" onClick={chooseTeam} disabled={otherSelected==="ATL"? true : false}>ATL</Menu.Item>
    </SubMenu>
    <SubMenu key="sub4" title="Northwest">
      <Menu.Item key="DEN" onClick={chooseTeam} disabled={otherSelected==="DEN"? true : false}>DEN</Menu.Item>
      <Menu.Item key="OKC" onClick={chooseTeam} disabled={otherSelected==="OKC"? true : false}>OKC</Menu.Item>
      <Menu.Item key="UTA" onClick={chooseTeam} disabled={otherSelected==="UTA"? true : false}>UTA</Menu.Item>
      <Menu.Item key="POR" onClick={chooseTeam} disabled={otherSelected==="POR"? true : false}>POR</Menu.Item>
      <Menu.Item key="MIN" onClick={chooseTeam} disabled={otherSelected==="MIN"? true : false}>MIN</Menu.Item>
    </SubMenu>
    <SubMenu key="sub5" title="Pacific">
      <Menu.Item key="LAL" onClick={chooseTeam} disabled={otherSelected==="LAL"? true : false}>LAL</Menu.Item>
      <Menu.Item key="LAC" onClick={chooseTeam} disabled={otherSelected==="LAC"? true : false}>LAC</Menu.Item>
      <Menu.Item key="PHX" onClick={chooseTeam} disabled={otherSelected==="PHX"? true : false}>PHX</Menu.Item>
      <Menu.Item key="SAC" onClick={chooseTeam} disabled={otherSelected==="SAC"? true : false}>SAC</Menu.Item>
      <Menu.Item key="GSW" onClick={chooseTeam} disabled={otherSelected==="GSW"? true : false}>GSW</Menu.Item>
    </SubMenu>
    <SubMenu key="sub6" title="Southwest">
      <Menu.Item key="HOU" onClick={chooseTeam} disabled={otherSelected==="HOU"? true : false}>HOU</Menu.Item>
      <Menu.Item key="DAL" onClick={chooseTeam} disabled={otherSelected==="DAL"? true : false}>DAL</Menu.Item>
      <Menu.Item key="MEM" onClick={chooseTeam} disabled={otherSelected==="MEM"? true : false}>MEM</Menu.Item>
      <Menu.Item key="SAS" onClick={chooseTeam} disabled={otherSelected==="SAS"? true : false}>SAS</Menu.Item>
      <Menu.Item key="NOP" onClick={chooseTeam} disabled={otherSelected==="NOP"? true : false}>NOP</Menu.Item>
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
