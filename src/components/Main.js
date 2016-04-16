require('normalize.css/normalize.css');
require('styles/App.css');
const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import TimeInput from './TimeInput/TimeInput';
import Records from './Records/Records';
import AccountDialog from './AccountView/AccountDialog/AccountDialog';
import RaisedButton from 'material-ui/lib/raised-button';

var Rebase = require('re-base');
var base = Rebase.createClass('https://sizzling-heat-1729.firebaseio.com');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 3.1,
      time: '0',
      modalOpen: false,
      authData: null
    };
  }

  componentDidMount(){
    this.setState({authData: base.getAuth()});
  }

  handleAccountClick() {
    this.setState({modalOpen: true});
  }

  handleAccountCloseCallback(){
    this.setState({modalOpen: false});
  }

  handleLoginCallback(){
    this.setState({authData: base.getAuth()});
  }

  render() {
    return (
      <div className='index'>
        <AppBar
          title='pacemaker'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          style={{background: 'black'}}
        />
        <AccountDialog
          loginCallback={this.handleLoginCallback.bind(this)}
          open={this.state.modalOpen}
          closeCallback={this.handleAccountCloseCallback.bind(this)}
        />
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xEB48;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xE566;</FontIcon>
        <FontIcon className='material-icons' style={{fontSize:'200px'}}>&#xE52F;</FontIcon>
        <h1>Go faster.</h1>
        <RaisedButton key="sign-in" onTouchTap={this.handleAccountClick.bind(this)} className="sign-out" label="sign in" default={true} />
        <TimeInput/>
        <Records/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
