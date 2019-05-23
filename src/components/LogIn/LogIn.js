import React, { Component } from 'react';
import './LogIn.scss';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import financeLogin from '../../images/financeLogin.svg';
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
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="cta-content">
          <img
            src={financeLogin}
            style={{ display: 'block', width: '500px' }}
          />
          <h1>Let's get back to trading.</h1>
        </div>

        <div className="login-main">
          <h1
            className="login-title"
            style={{ textAlign: 'center', display: 'block' }}
          >
            Sign in.
          </h1>
          {!this.props.isLoggingIn ? (
            <p style={{ color: 'red', fontSize: '1em' }}>{this.props.error}</p>
          ) : null}
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
            <button type="submit">
              {this.props.isLoggingIn ? <BeatLoader /> : 'Sign In'}
            </button>
            <div className="alternative-cta">
              <p>Not a member yet? </p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LogIn);
