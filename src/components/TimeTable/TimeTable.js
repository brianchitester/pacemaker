import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  render() {
    return (
      <div className='TimeTable'>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Distance</TableHeaderColumn>
              <TableHeaderColumn>Pace (per mile)</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>1 Mile</TableRowColumn>
              <TableRowColumn>5:50</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

TimeTable.defaultProps = {
};

export default TimeTable;
