import React, { Component } from 'react';
import './StocklyApp.scss';
class StocklyApp extends Component {
  logout = () => {
    localStorage.removeItem('token');
  };
  render() {
    return (
      <div>
        <button onClick={this.logout}>
          <a href="/">logout</a>
        </button>
        <h1>Your Dashboard</h1>
        <p>url should be /</p>
      </div>
    );
  }
}
export default StocklyApp;
