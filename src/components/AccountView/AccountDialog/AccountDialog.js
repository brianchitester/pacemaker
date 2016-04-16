require('./AccountDialog.scss');

import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

var Rebase = require('re-base');
var base = Rebase.createClass('https://sizzling-heat-1729.firebaseio.com');

export default class AccountDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      password: '',
      passwordConfirm: '',
      loginCallback: props.loginCallback,
      closeCallback: props.closeCallback,
      showCreateForm: false,
      errorMessage: ''
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        open: nextProps.open,
        loginCallback: nextProps.loginCallback,
        closeCallback: nextProps.closeCallback
      });
  }

  handleClose() {
    this.setState({open: false});
    this.setState({showCreateForm: false});
    this.setState({errorMessage: ''});
    this.state.closeCallback();
  }

  handleSubmitClick(){
    if (this.state.showCreateForm) {
      this.handleAddAccount();
    }
    else {
      this.userHandle();
    }
  }

  handleAddAccount(){
    base.createUser({
      email: this.state.email,
      password: this.state.password
    }, this.userHandle.bind(this));
  }

  handleEmailChange (event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }

  handlePasswordConfirmChange (event) {
    this.setState({passwordConfirm: event.target.value});
  }

  handleCreateClick() {
    this.setState({showCreateForm: true});
  }

  userHandle(error) {
    if (error) {
       switch (error.code) {
         case 'EMAIL_TAKEN':
           this.setState({errorMessage: 'The new user account cannot be created because the email is already in use.'});
           break;
         case 'INVALID_EMAIL':
           this.setState({errorMessage: 'The specified email is not a valid email.'});
           break;
         default:
           this.setState({errorMessage: 'Error creating user'});
       }
     }
     else {
       base.authWithPassword({
         email: this.state.email,
         password: this.state.password
       }, this.authHandle.bind(this));
     }
  }

  authHandle(error) {
    if (error) {
      this.setState({errorMessage: 'Login Failed!'});
    }
    else {
      this.state.loginCallback();
      this.handleClose();
    }
  }

  renderCreateAccountSection() {
    if (this.state.showCreateForm) {
      return (<TextField
        floatingLabelText="confirm password"
        type="password"
        onChange={this.handlePasswordConfirmChange.bind(this)}
        errorText={this.state.password !== this.state.passwordConfirm ? 'Passwords do not match.' : ''}
        value={this.state.passwordConfirm}
      />);
    }
    else {
      return (<div className='create-section'>
        <div> - or - </div>
        <FlatButton
          style={{width: '15em', padding: 0}}
          label="create account"
          secondary={true}
          onTouchTap={this.handleCreateClick.bind(this)}
        />
      </div>);
    }
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmitClick.bind(this)}
      />
    ];

    return (
        <Dialog
          title={this.state.showCreateForm ? 'create account' : 'sign in'}
          contentStyle={{width: 300}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
        <div style={{color: 'red'}}>
          {this.state.errorMessage}
        </div>
        <div className="dialog-content">
            <TextField
              floatingLabelText="email"
              onChange={this.handleEmailChange.bind(this)}
              value={this.state.email}
            />
            <TextField
              floatingLabelText="password"
              type="password"
              onChange={this.handlePasswordChange.bind(this)}
              value={this.state.password}
            />
            {this.renderCreateAccountSection()}
        </div>
        </Dialog>
    );
  }
}

export default AccountDialog;
