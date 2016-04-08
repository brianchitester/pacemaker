require('normalize.css/normalize.css');
require('styles/App.css');
const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import TimeInput from './TimeInput/TimeInput';
import TimeTable from './TimeTable/TimeTable';

class AppComponent extends React.Component {
  inputChange(distance, time) {
    console.log('distance=', distance);
    console.log('time=', time);
  }

  render() {
    return (
      <div className='index'>
        <AppBar
          title='pacemaker'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <FontIcon className='material-icons' style={{fontSize:'300px'}}>&#xE566;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'300px'}}>&#xE566;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'300px'}}>&#xE566;</FontIcon>
        <h1>Run faster.</h1>
        <TimeInput inputChangeCallback={this.inputChange.bind(this)} />
        <TimeTable/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
