import React, { Component } from 'react';
import './StocklyApp.scss';
import SearchBar from '../SearchBar';
import WatchList from '../WatchList/WatchList';
class StocklyApp extends Component {
  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-logo">
            <span className="app-logo__sigma">Σ</span>tock
            <span className="app-logo__ly">ly</span>
          </h1>
          <button onClick={this.logout}>
            <a href="/">logout</a>
          </button>
        </div>

        <SearchBar />
        <WatchList />
      </div>
    );
  }
}
export default StocklyApp;
