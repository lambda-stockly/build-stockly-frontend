import React, { Component } from 'react';
import './Register.scss';
import { register } from '../../actions';
import { connect } from 'react-redux';
class Register extends Component {
  state = {
    email: '',
    user: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      user: {
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register({ ...this.state }).then(() => {
      this.props.history.push('/home');
    });
  };

  render() {
    console.log(this.props);
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
const mapStateToProps = state => {
  console.log(state);
  return {
    isRegistering: state.isRegistering
  };
};
export default connect(
  mapStateToProps,
  { register }
)(Register);
