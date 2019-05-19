import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
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
    return <div className="Register" />;
  }
}

export default Register;
