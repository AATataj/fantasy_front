import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function createData(name, date, team, opp, res, min, fgm, fga, fgPer, fgm2, fga2, fg2Per, 
                    fgm3, fga3, fg3Per, ftm, fta, ftPer, orb, drb, trb, ast, stl, blk, tov, 
                    pf, pts ) {
  return { name, date, team, opp, res, min, fgm, fga, fgPer, fgm2, fga2, fg2Per, 
           fgm3, fga3, fg3Per, ftm, fta, ftPer, orb, drb, trb, ast, stl, blk, tov, pf, pts };
}

const rows = [
  createData('Cupcake', '2001/01/01', 'TOR', 'ATL','W', 3.7, 6, 4.3, 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1),
  createData('Donut', '2001/01/02', 'TOR','BOS', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Eclair', '2001/01/03', 'TOR', 'NYK', 'L',4,3,2,1,0,1,2,3,4,5,5,4,3,2,1,0,1,2,3),
  createData('Frozen yoghurt', '2001/01/04', 'TOR', 'NJN', 'L', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Gingerbread', '2001/01/05', 'TOR', 'ORL', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Honeycomb', '2001/01/06','TOR', 'PHX', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Ice cream sandwich', '2002/01/07', 'TOR', 'CHI', 'L', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Jelly Bean', '2001/01/08','TOR', 'MIA', 'L', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('KitKat', '2001/01/09','TOR', 'CHA', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Lollipop', '2001/01/10','TOR', 'IND', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Marshmallow', '2001/02/11','TOR', 'PHI', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Nougat', '2001/01/12','TOR', 'MIL', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
  createData('Oreo', '2001/01/13','TOR', 'WAS', 'W', 5,4,3,2,1,0,1,2,3,4,5,5,4,3,2,1, 1,2,3),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name'},
  { id: 'date', numeric: false, disablePadding: false, label: 'Date'},
  { id: 'team', numeric: false, disablePadding: false, label: 'Team'},
  { id: 'opp', numeric: false, disablePadding: false, label: 'Opp'},
  { id: 'res', numeric: false, disablePadding: false, label: 'Res'},
  { id: 'min', numeric: true, disablePadding: false, label: 'Min'},
  { id: '2fgm', numeric: true, disablePadding: false, label: '2FGM'},
  { id: '2fga', numeric: true, disablePadding: false, label: '2FGA'},
  { id: '2fg%', numeric: true, disablePadding: false, label: '2FG%'},
  { id: '3fgm', numeric: true, disablePadding: false, label: '3FGM'},
  { id: '3fga', numeric: true, disablePadding: false, label: '3FGA'},
  { id: '3fg%', numeric: true, disablePadding: false, label: '3FG%'},
  { id: 'ftm', numeric: true, disablePadding: false, label: 'FTM'},
  { id: 'fta', numeric: true, disablePadding: false, label: 'FTA'},
  { id: 'ft%', numeric: true, disablePadding: false, label: 'FT%'},
  { id: 'orb', numeric: true, disablePadding: false, label: 'ORB'},
  { id: 'drb', numeric: true, disablePadding: false, label: 'DRB'},
  { id: 'trb', numeric: true, disablePadding: false, label: 'TRB'},
  { id: 'ast', numeric: true, disablePadding: false, label: 'AST'},
  { id: 'stl', numeric: true, disablePadding: false, label: 'STL'},
  { id: 'blk', numeric: true, disablePadding: false, label: 'BLK'},
  { id: 'tov', numeric: true, disablePadding: false, label: 'TOV'},
  { id: 'pf', numeric: true, disablePadding: false, label: 'PF'},
  { id: 'pts', numeric: true, disablePadding: false, label: 'PTS'},
  
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Game Statistics
        </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  cellWidth: {
    'width':'500px',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            //className={classes.table}
            aria-labelledby="tableTitle"
            size= 'small'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell /*component="th"*/ scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right" >{row.team}</TableCell>
                      <TableCell align="right" >{row.opp}</TableCell>
                      <TableCell align="right" >{row.res}</TableCell>
                      <TableCell align="right" >{row.min}</TableCell>
                      <TableCell align="right" >{row.fgm}</TableCell>
                      <TableCell align="right" >{row.fga}</TableCell>
                      <TableCell align="right" >{row.fgPer}</TableCell>
                      <TableCell align="right" >{row.fgm2}</TableCell>
                      <TableCell align="right" >{row.fga2}</TableCell>
                      <TableCell align="right" >{row.fg2Per}</TableCell>
                      <TableCell align="right" >{row.fgm3}</TableCell>
                      <TableCell align="right" >{row.fga3}</TableCell>
                      <TableCell align="right" >{row.fg3Per}</TableCell>
                      <TableCell align="right" >{row.ftm}</TableCell>
                      <TableCell align="right" >{row.fta}</TableCell>
                      <TableCell align="right" >{row.ftPer}</TableCell>
                      <TableCell align="right" >{row.orb}</TableCell>
                      <TableCell align="right" >{row.drb}</TableCell>
                      <TableCell align="right" >{row.trb}</TableCell>
                      <TableCell align="right" >{row.ast}</TableCell>
                      <TableCell align="right" >{row.stl}</TableCell>
                      <TableCell align="right" >{row.blk}</TableCell>
                      <TableCell align="right" >{row.pf}</TableCell>
                      <TableCell align="right" >{row.pts}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
