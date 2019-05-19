import React, { Component } from 'react';
import './LogIn.scss';

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="LogIn">
        <h1 className="LogIn__Title">Sign in</h1>
        <form
          className="LogIn__Form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={this.handleChanges}
            value={this.state.value}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
            value={this.state.value}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
