import React, { Component } from 'react';
import './App.css';
import { Input, Icon } from 'antd';
import { Button } from 'antd';
import * as API from './util/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ username: '' });
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({password: e.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    const body = {
      username: this.state.username,
      password: this.state.password
    }
    API.login(body).then(
      response => {
        console.log(response.data);
      }
    ).catch(
      error => {
        console.log(error.message);
      }
    );
  }

  render() {
    const { username,password } = this.state;
    const suffix = username ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={username}
          onChange={this.onChangeUsername}
          ref={node => this.userNameInput = node}
        />
        <Input.Password 
          placeholder="Input password" 
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          value={password}
          onChange={this.onChangePassword}
        />
        <Button 
          type="primary"
          onClick={this.handleLogin}
        >
          登录
        </Button>
      </div>
    );
  }
}

export default App;
