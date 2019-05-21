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
        <button onClick={this.logout}>
          <a href="/">logout</a>
        </button>
        <SearchBar />
        <WatchList />
      </div>
    );
  }
}
export default StocklyApp;
