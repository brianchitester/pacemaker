require('normalize.css/normalize.css');
require('styles/App.css');
const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import TimeInput from './TimeInput/TimeInput';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 3.1,
      time: '0'
    };
  }

  render() {
    return (
      <div className='index'>
        <AppBar
          title='pacemaker'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xE566;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xE566;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xE566;</FontIcon>
        <h1>Run faster.</h1>
        <TimeInput/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
