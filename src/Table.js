import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, BASIC, STANDARD, PREMIUM) {
  return { name, BASIC, STANDARD, PREMIUM};
}

const rows = [
  createData('Monthly price after free month ends on 6/19/19', `$8.99`, `$12.99`, `$15.99`),
  createData('HD Available', `$9`, `$13`, `$16`),
  createData('Ultra HD Available', 262, 16.0, 24),
  createData('Screens you can watch on at the same time', 305, 3.7, 67),
  createData('Watch on your laptop, TV, phone and tablet', 356, 16.0, 49),
  createData('Unlimited movies and TV shows', 356, 16.0, 49),
  createData('Cancel anytime', 356, 16.0, 49),
  createData('First month free', 356, 16.0, 49),


];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">BASIC</StyledTableCell>
            <StyledTableCell align="right">STANDARD&nbsp;</StyledTableCell>
            <StyledTableCell align="right">PREMIUM&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.BASIC}</StyledTableCell>
              <StyledTableCell align="right">{row.STANDARD}</StyledTableCell>
              <StyledTableCell align="right">{row.PREMIUM}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}