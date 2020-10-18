import React from 'react';
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
  const selectedTeam = props.selectedTeam;
  const chooseTeam = props.chooseTeam;
  const otherSelected = props.otherSelected;

  const menu = (
    <Menu
    style={{ width: 240 }}
    mode="vertical"
    > 
    {options.map((division, index1) => (
      <SubMenu key={division.division} title={division.division}>
      {division.teams.map((team, index2) => (
          <Menu.Item key={team} onClick={chooseTeam} disabled={otherSelected===team? true : false}>{team}</Menu.Item>
      ))}
      </SubMenu>
    ))}
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
