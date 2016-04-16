require('./Records.scss');

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Records extends React.Component {

  render() {
    return (
      <div className='records'>
        <Paper>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={{textAlign: 'center', background: 'black', color: 'white', fontWeight: 'bold', fontSize:'20px'}}>RECORDS</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{textAlign: 'right', background: 'black', color: 'white'}}>5K</TableRowColumn>
                <TableRowColumn>22:30</TableRowColumn>
              </TableRow>
            </TableBody>
            <TableFooter adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{textAlign: 'center'}}>
                  <TextField
                    className='record-distance-input'
                    style={{width:'150px', margin:'12'}}
                    hintText='Label'
                  />
                  <TextField
                    className='record-time-input'
                    style={{width:'150px', margin:'12'}}
                    hintText='hh:mm:ss'
                  />
                  <RaisedButton label="Add Record" style={{margin:'12'}} />
                </TableRowColumn>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    );
  }
}

Records.defaultProps = {
};

export default Records;
