import React, {useState, useEffect}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import './App.css';



const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key:'name',
      width: '7%'
    },
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
        title: 'Min',
        dataIndex: 'minutes',
        key:'minutes',
        sorter: {
          compare: (a, b) => a.minutes - b.minutes,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: '3FGM',
        dataIndex: 'number_3fgm',
        key:'number_3fgm',
        sorter: {
          compare: (a, b) => a.number_3fgm - b.number_3fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FGM',
        dataIndex: 'fgm',
        key:'fgm',
        sorter: {
          compare: (a, b) => a.fgm - b.fgm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FGA',
        dataIndex: 'fga',
        key:'fga',
        sorter: {
          compare: (a, b) => a.fga - b.fga,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FG%',
        dataIndex: 'fgper',
        key:'fgper',
        sorter: {
          compare: (a, b) => a.fgper - b.fgper,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FTM',
        dataIndex: 'ftm',
        key:'ftm',
        sorter: {
          compare: (a, b) => a.ftm - b.ftm,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FTA',
        dataIndex: 'fta',
        key:'fta',
        sorter: {
          compare: (a, b) => a.fta - b.fta,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FT%',
        dataIndex: 'ftper',
        key:'ftper',
        sorter: {
          compare: (a, b) => a.ftper - b.ftper,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'ORB',
        dataIndex: 'orb',
        key:'orb',
        sorter: {
          compare: (a, b) => a.orb - b.orb,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'DRB',
        dataIndex: 'drb',
        key:'drb',
        sorter: {
          compare: (a, b) => a.drb - b.drb,
          multiple: 1,
        },
        width:'2%'
      },{
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
  ];

function TeamQuery(){
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState(null);
    const [requestData, setRequestData] = useState(null);
    const [dateErr, setDateErr] = useState(false);
    const [idErr, setIdErr] = useState(false);

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
        if ((document.getElementById('playerName').value!=='' || document.getElementById('playerID').value!==''))
        {

            if (document.getElementById('startDate').value <= document.getElementById('endDate').value)
            {
                requestData.name = document.getElementById('playerName').value;
                requestData.startDate = document.getElementById('startDate').value;
                requestData.endDate = document.getElementById('endDate').value;
                requestData.playerID = parseInt(document.getElementById('playerID').value);
                const requestOptions = {
                    method : 'POST',
                    headers : {'Content-Type': 'application/json', 
                            },
                    body : JSON.stringify(requestData)
                };

                console.log(JSON.stringify(requestOptions));
                // this will likely change as it's going to handle the response as well.
                // but for now, I've verified the body of the post request in postman
                // fetch('http://127.0.0.1:8000/dbQuery/', requestOptions)
                //     .then(response => setData(response.json()));
                    //.then(data => console.log("this is filler"));
                setRequestData(requestOptions);
            }else{
                setDateErr(true);
            }
        }else{
            setIdErr(true);
        }
    };
    return ( 
        <React.Fragment>
            <br />
            Individual Player Stats
            <br/><br/><br/>
            <TextField id="playerName" type="text" 
            label= " Player Name "
            error={idErr}
            helperText={idErr === true ? "must provide name or id" : "playerID takes precedence"}
            />&nbsp;&nbsp;&nbsp;&nbsp;
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
            <TextField 
            id="playerID" 
            type="text" 
            label= " Player ID "
            helperText = {idErr === true ? "must provide name or id" : "playerID takes precedence"}
            error={idErr}  
            />
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