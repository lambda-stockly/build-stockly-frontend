import React, { Component } from 'react';
import './Register.scss';
import { register } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    this.props.register({ ...this.state }).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="register-container">
        <div className="cta-content">
          <h1>A smarter way to trade.</h1>
          <p>do stuff smartly.</p>
        </div>

        <div className="register-main">
          <h1>Get Started.</h1>
          <form
            className="register-form"
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
            <div className="alternative-cta">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
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
