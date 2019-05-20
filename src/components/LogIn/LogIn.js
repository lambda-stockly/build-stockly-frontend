import React, { Component } from 'react';
import './LogIn.scss';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { BeatLoader } from 'react-spinners';
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
    this.props.login({ ...this.state }).then(() => {
      this.props.history.push('/home');
    });
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
            // type="email"
            name="email"
            placeholder="Email address"
            onChange={this.handleChanges}
            value={this.state.value}
          />
          <input
            // type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
            value={this.state.value}
          />
          <button type="submit">
            {this.props.isLoggingIn ? <BeatLoader /> : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'current state');
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LogIn);
