import React, {useState, useEffect}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import EnhancedTable from './EnhancedTable.js';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '7%'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
      width:'5%'
    },
    {
      title: 'Team',
      dataIndex: 'team',
      width:'2%'
    },
    {
      title: 'Opp',
      dataIndex: 'opp',
      width:'2%'
    },
    {
        title: 'Res',
        dataIndex: 'res',
        width:'2%'
      },
      {
        title: 'Min',
        dataIndex: 'min',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: '3FGM',
        dataIndex: 'fgm3',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FGM',
        dataIndex: 'fgm',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FGA',
        dataIndex: 'fga',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FG%',
        dataIndex: 'fgPer',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FTM',
        dataIndex: 'fgm',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FTA',
        dataIndex: 'fga',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'FT%',
        dataIndex: 'fgPer',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'ORB',
        dataIndex: 'orb',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'DRB',
        dataIndex: 'orb',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },{
        title: 'TRB',
        dataIndex: 'orb',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'AST',
        dataIndex: 'ast',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'STL',
        dataIndex: 'stl',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'BLK',
        dataIndex: 'blk',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'TOV',
        dataIndex: 'tov',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'PF',
        dataIndex: 'pf',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
      {
        title: 'PTS',
        dataIndex: 'pst',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
        width:'2%'
      },
  ];
  
  const datastuff = [
    {
      key: '1',
      name: 'John Brown',
      team: 'TOR',
      opp: 'CHA',
      res: 'W',
      min: 98,
      pts: 60,
      pf: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

function PlayerQuery(){
    const [ isLoading, setIsLoading ] = useState(false)
    const [ data, setData ] = useState([])
    const [requestData, setRequestData] = useState(null)

    useEffect(() => {
        (async ()=>{
            console.log("we get here");
            setIsLoading(true);
            const fetched = await fetch('http://127.0.0.1:8000/dbQuery/', requestData);
            const response = await fetched.json();
            setData(response);
            setIsLoading(false);
        })()
        console.log(data);
    },[data, requestData]);
    const submit = (event) => {
        // add http get request stuff here.
        var requestData = {};
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

    };
    return ( 
        <React.Fragment>
            <br />
            Individual Player Stats
            <br/><br/><br/>
            <TextField id="playerName" type="text" 
            label= " Player Name "  
            />
            <TextField id="startDate" 
            type="date" 
            helperText="default 1st career game"
            label="Start Date"
            InputLabelProps={{ shrink: true }} 
            />   
            <TextField id="endDate" 
            type="date"  
            helperText="default is latest game"
            label="End Date"
            InputLabelProps={{ shrink: true }} 
            />  
            <TextField id="playerID" type="text" 
            label= " Player ID "  
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
               dataSource={datastuff} 
               pagination={{ defaultPageSize: 20, showSizeChanger: true, pageSizeOptions: ['25', '50', '100']}}        
               size='small'
        />
        </React.Fragment>
    ); 
} 
export default PlayerQuery