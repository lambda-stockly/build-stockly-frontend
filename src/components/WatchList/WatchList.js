import React, { Component } from 'react';
import './WatchList.scss';
export default class WatchList extends Component {
  render() {
    return (
      <div className="watchlist-container">
        <h3>WatchList</h3>
        <div className="company-container">
          {/* company-container flex row  */}
          {/* company-container children flex column  */}
          <div className="watchlist-symbols watchlist">
            <p>Symbol</p>
            {/* watchlist.map */}
          </div>
          <div className="watchlist-lastprice watchlist">
            <p>Last Price</p>
            {/* watchlist.map */}
          </div>
          <div className="watchlist-change watchlist">
            <p>Change</p>
            {/* watchlist.map */}
          </div>
          <div className="watchlist-percent watchlist">
            <p>% change</p>
            {/* watchlist.map */}
          </div>
        </div>
      </div>
    );
  }
}
