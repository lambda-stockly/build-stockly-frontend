import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar';
import WatchList from '../WatchList';
import StockInfo from '../StockInfo';
import TopSearched from '../TopSearched';
import backgroundImage from '../../images/analytics.svg';
import './StocklyApp.scss';

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
              {!this.props.selectedStock && (
                <div className="bg-image-wrapper">
                  <img
                    className="bg-image"
                    src={backgroundImage}
                    alt="Man drawing a bar graph"
                  />
                </div>
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
