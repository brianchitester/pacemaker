import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

var distances = [ 1, 3.1, 6.2, 13.1, 26.2 ];

var hmsToSecondsOnly = function(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

var secondsToHMS = function(totalSec) {
  var hours = parseInt( totalSec / 3600 ) % 24;
  var minutes = parseInt( totalSec / 60 ) % 60;
  var seconds = totalSec % 60;

  var result = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds  < 10 ? '0' + seconds : seconds);
  return result;
}

export default class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 2,
      distance: 3.1,
      tableRows: []
    };
  }

  componentWillReceiveProps(nextProps) {

    console.log("onetwwwwo");

    var tableRows = [];
    let inputDistance = nextProps.distance;
    distances.forEach(function(distance) {
      let time = hmsToSecondsOnly(nextProps.time) * (distance / inputDistance)^1.06;
      time = secondsToHMS(time);
      tableRows.push(
        <TableRow>
          <TableRowColumn>{distance}</TableRowColumn>
          <TableRowColumn>{time}</TableRowColumn>
        </TableRow>
      );
    });

    this.setState({
      time: nextProps.time,
      distance: nextProps.distance,
      tableRows: tableRows
    });
  }

  render() {
    console.log("hey im rendering");
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
            {this.state.tableRows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TimeTable.defaultProps = {
};

export default TimeTable;
