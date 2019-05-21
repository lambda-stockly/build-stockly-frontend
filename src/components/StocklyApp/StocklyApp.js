import React, { Component } from 'react';
import './StocklyApp.scss';
import SearchBar from '../SearchBar';
class StocklyApp extends Component {
  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    return (
      <div className="app-container">
        <button onClick={this.logout}>
          <a href="/">logout</a>
        </button>
        <SearchBar />
        <h1>Your Dashboard</h1>
        <p>url should be /</p>
      </div>
    );
  }
}
export default StocklyApp;
