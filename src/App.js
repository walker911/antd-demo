import React, { Component } from 'react';
import './App.css';
import { Input, Icon } from 'antd';
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ username: '' });
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
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
        />
        <Button type="primary">登录</Button>
      </div>
    );
  }
}

export default App;
