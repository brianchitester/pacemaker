import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import TimeTable from '../TimeTable/TimeTable';

var distanceMap = {
  1: 1,
  2: 3.1,
  3: 6.2,
  4: 13.1,
  5: 26.2
}

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      distance: 3.1,
      time: '0'
    };
  }

  handleDistanceChange(event, index, value) {
    this.setState({
      value: value,
      distance: distanceMap[value]
    });
  }

  handleTimeChange(e){
    let distanceIndex = this.state.value;
    this.setState({
      time: e.target.value,
      distance: distanceMap[distanceIndex]
    });
  }

  render() {
    return (
      <div>
        <div className='time-input'>
          <DropDownMenu style={{fontSize:'50px', height:'50px', background:'white'}} value={this.state.value} onChange={this.handleDistanceChange.bind(this)}>
            <MenuItem value={1} primaryText='1 Mile'/>
            <MenuItem value={2} primaryText='5K'/>
            <MenuItem value={3} primaryText='10K'/>
            <MenuItem value={4} primaryText='Half Marathon'/>
            <MenuItem value={5} primaryText='Marathon'/>
          </DropDownMenu>
          <TextField
            className='time-input'
            style={{fontSize:'50px', height:'60px'}}
            hintText='hh:mm:ss'
            onChange={this.handleTimeChange.bind(this)}
          />
        </div>
        <TimeTable distance={this.state.distance} time={this.state.time}/>
      </div>
    );
  }
}

TimeInput.defaultProps = {
};

export default TimeInput;
