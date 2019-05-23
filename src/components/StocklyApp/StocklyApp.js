import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './StocklyApp.scss';
import SearchBar from '../SearchBar';
import WatchList from '../WatchList/WatchList';
import { IoMdLogOut } from 'react-icons/io';
import TopSearched from '../TopSearched';

class StocklyApp extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="app-wrapper">
        <div className="app-header">
          <div className="app-container">
            <div className="app-header-inner">
              <h1 className="app-logo">
                <span className="app-logo__sigma">Σ</span>tock
                <span className="app-logo__ly">ly</span>
              </h1>
              <div className="app-header-signout" onClick={this.logout}>
                <IoMdLogOut size={28} className="app-header-signout-icon" />
                <span className="app-header-signout-text">Sign out</span>
              </div>
            </div>
          </div>
        </div>
        <div className="app-container">
          <div className="app-main">
            <div>
              <SearchBar />
            </div>
            <div>
              <TopSearched />
              <WatchList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(StocklyApp);
