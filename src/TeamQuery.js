import React, {useState, useEffect}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import './App.css';
import TeamsMenu from './TeamsMenu.js';

/*
Note, that to save columns, there are composite columns in this table
so the import of data will require some small handling before piping them into columns here
whenever we finish the back end reply
*/

const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key:'date',
      sorter: {
        compare: (a, b) => Date.parse(a.date) - Date.parse(b.date),
        multiple: 3,
      },
      width:'5%'
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key:'team',
      width:'2%'
    },
    {
      title: 'Opp',
      dataIndex: 'opponent',
      key:'opponent',
      width:'2%'
    },
    {
        title: 'Res',
        dataIndex: 'result',
        key:'result',
        width:'2%'
      },
      {
        title: '3FGM/A',
        dataIndex: 'number_3fgm',
        key:'number_3fgm',
        sorter: {
          compare: (a, b) => a.number_3fgm - b.number_3fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FGM/A',
        dataIndex: 'fgm',
        key:'fgm',
        sorter: {
          compare: (a, b) => a.fgm - b.fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FTM/A',
        dataIndex: 'ftm',
        key:'ftm',
        sorter: {
          compare: (a, b) => a.ftm - b.ftm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'TRB',
        dataIndex: 'trb',
        key:'trb',
        sorter: {
          compare: (a, b) => a.trb - b.trb,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'AST',
        dataIndex: 'ast',
        key:'ast',
        sorter: {
          compare: (a, b) => a.ast - b.ast,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'STL',
        dataIndex: 'stl',
        key:'stl',
        sorter: {
          compare: (a, b) => a.stl - b.stl,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'BLK',
        dataIndex: 'blk',
        key:'blk',
        sorter: {
          compare: (a, b) => a.blk - b.blk,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'TOV',
        dataIndex: 'tov',
        key:'tov',
        sorter: {
          compare: (a, b) => a.tov - b.tov,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'PF',
        dataIndex: 'pf',
        key:'pf',
        sorter: {
          compare: (a, b) => a.pf - b.pf,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'PTS',
        dataIndex: 'pts',
        key:'pts',
        sorter: {
          compare: (a, b) => a.pts - b.pts,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'Opp3FGM/A',
        dataIndex: 'number_3fgm',
        key:'Oppnumber_3fgm',
        sorter: {
          compare: (a, b) => a.number_3fgm - b.number_3fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppFGM/A',
        dataIndex: 'fgm',
        key:'Oppfgm',
        sorter: {
          compare: (a, b) => a.fgm - b.fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppFTM/A',
        dataIndex: 'ftm',
        key:'Oppftm',
        sorter: {
          compare: (a, b) => a.ftm - b.ftm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppTRB',
        dataIndex: 'trb',
        key:'Opptrb',
        sorter: {
          compare: (a, b) => a.trb - b.trb,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppAST',
        dataIndex: 'ast',
        key:'Oppast',
        sorter: {
          compare: (a, b) => a.ast - b.ast,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppSTL',
        dataIndex: 'stl',
        key:'Oppstl',
        sorter: {
          compare: (a, b) => a.stl - b.stl,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppBLK',
        dataIndex: 'blk',
        key:'Oppblk',
        sorter: {
          compare: (a, b) => a.blk - b.blk,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppTOV',
        dataIndex: 'tov',
        key:'Opptov',
        sorter: {
          compare: (a, b) => a.tov - b.tov,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppPF',
        dataIndex: 'pf',
        key:'Opppf',
        sorter: {
          compare: (a, b) => a.pf - b.pf,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'OppPTS',
        dataIndex: 'pts',
        key:'Opppts',
        sorter: {
          compare: (a, b) => a.pts - b.pts,
          multiple: 1,
        },
        width:'2%'
      },
  ];  
function TeamQuery(){
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState(null);
    const [requestData, setRequestData] = useState(null);
    const [dateErr, setDateErr] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedOpp, setSelectedOpp] = useState(null);
    const [teamErr, setteamErr] = useState(false);
    const chooseTeam = (event) => {
      console.log(event.key);
      setSelectedTeam(event.key);
  
    }
    const chooseOpp = (event) =>{
      console.log(event.key);
      setSelectedOpp(event.key)
    }
    useEffect(() => {
        (async ()=>{
            setIsLoading(true);
            if (requestData != null){
                const fetched = await fetch('http://127.0.0.1:8000/dbQuery/', requestData);
                const response = await fetched.json();
                const fieldss = JSON.parse(response).map(function(item, i){
                    item.fields.key = i;
                    return item.fields;
                })
                console.log(fieldss);
                //console.log("json parse" +  JSON.parse(response));
                setData(fieldss);
            }
            setIsLoading(false);
        })()
    }, [requestData]);
    const submit = (event) => {
        // add http get request stuff here.
        var requestData = {};
        if (selectedTeam!==null)
        {
          requestData.team=selectedTeam;
          requestData.opponent=selectedOpp;
          if (document.getElementById('startDate').value <= document.getElementById('endDate').value)
          {
                requestData.startDate = document.getElementById('startDate').value;
                requestData.endDate = document.getElementById('endDate').value;
          }else{
            setDateErr(true);
          }
          const requestOptions = {
            method : 'POST',
            headers : {'Content-Type': 'application/json', 
                    },
            body : JSON.stringify(requestData)
          };
          console.log(requestOptions.body);
        }else{
          setteamErr(true);
        }
        //         console.log(JSON.stringify(requestOptions));
        //         // this will likely change as it's going to handle the response as well.
        //         // but for now, I've verified the body of the post request in postman
        //         // fetch('http://127.0.0.1:8000/dbQuery/', requestOptions)
        //         //     .then(response => setData(response.json()));
        //             //.then(data => console.log("this is filler"));
        //         setRequestData(requestOptions);
    };
    return ( 
        <React.Fragment>
            <br />
            Team Stats
            <br/><br/><br/>
            <TeamsMenu 
              chooseTeam={chooseTeam} 
              selectedTeam={selectedTeam}
              otherSelected={selectedOpp}
              id = "team"/>
              &nbsp;&nbsp;&nbsp;&nbsp;
            <TeamsMenu 
              chooseTeam={chooseOpp} 
                selectedTeam={selectedOpp}
                otherSelected={selectedTeam}
                id = "opponent"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="startDate" 
            type="date" 
            helperText={dateErr === true ? "end date must be later" : "default 1st career game"}
            //InputProps={{inputProps: {min : "01-10-2020", max: "10-10-2020"} }}
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            error={dateErr} 
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="endDate" 
            type="date"  
            helperText={dateErr === true ? "end date must be later" : "default 1st career game"}
            label="End Date"
            InputLabelProps={{ shrink: true }}
            error={dateErr} 
            />&nbsp;&nbsp;&nbsp;&nbsp;  
            <br />
            <Grid container spacing={4}>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={3}>
                <div style={{ position: 'left' }}>
                    <Button variant='contained'  onClick={(event) => submit(event)}>
                        SUBMIT
                    </Button>
                </div>
                </Grid>
            </Grid>
            <br /><br />
        <Table columns={columns} 
               dataSource={data} 
               pagination={{ defaultPageSize: 20, showSizeChanger: true, pageSizeOptions: ['25', '50', '100']}}        
               rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
               size='small'
        />
        </React.Fragment>
    ); 
}
export default TeamQuery