import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import financeLogin from '../../images/financeLogin.svg';
import './auth.scss';

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
    const { isLoggingIn } = this.props;
    return (
      <div className="login-container">
        <div className="cta-content">
          <img
            src={financeLogin}
            style={{ display: 'block', width: '500px' }}
            alt=""
          />
          <h1>Let's get back to trading</h1>
        </div>

        <div className="login-main">
          <h1 style={{ textAlign: 'center' }}>Sign In</h1>
          {!isLoggingIn ? (
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
              {isLoggingIn ? <BeatLoader size={10} color="#fff" /> : 'Sign In'}
            </button>

            <div className="alternative-cta">
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
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
