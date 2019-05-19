import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
  state = {
    email: '',
    username: '',
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
      <div className="Register">
        <h1 className="Register__Title">Sign Up</h1>
        <form
          className="Register__Form"
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
            type="text"
            name="username"
            placeholder="Username"
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

export default Register;
