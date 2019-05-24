import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './StocklyApp.scss';
import SearchBar from '../SearchBar';
import WatchList from '../WatchList';
import StockInfo from '../StockInfo';
import { IoMdLogOut } from 'react-icons/io';
import TopSearched from '../TopSearched';
import { connect } from 'react-redux';

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
              <SearchBar />
              <div className="app-header-signout" onClick={this.logout}>
                <IoMdLogOut size={28} className="app-header-signout-icon" />
                <span className="app-header-signout-text">Sign out</span>
              </div>
            </div>
          </div>
        </div>
        <div className="app-container">
          <div className="app-main">
            <div className="app-main__stock-lists">
              <TopSearched />
              <WatchList />
            </div>
            <div>
              {this.props.selectedStock && this.props.selectedStock.name && (
                <StockInfo
                  symbol={this.props.selectedStock.symbol}
                  name={this.props.selectedStock.name}
                />
              )}
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(StocklyApp));
