require('./TimeInput.scss');

import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div className='TimeInput'>
        <DropDownMenu style={{fontSize:'50px', height:'50px'}} className='distance-selector' value={this.state.value} onChange={this.handleChange.bind(this)}>
          <MenuItem value={1} primaryText='1 Mile'/>
          <MenuItem value={2} primaryText='5K'/>
          <MenuItem value={3} primaryText='10K'/>
          <MenuItem value={4} primaryText='Half Marathon'/>
          <MenuItem value={5} primaryText='Marathon'/>
        </DropDownMenu>
        <TextField
          style={{fontSize:'50px', height:'60px'}}
          hintText='hh:mm:ss'
        />
      </div>
    );
  }
}

TimeInput.defaultProps = {
};

export default TimeInput;
