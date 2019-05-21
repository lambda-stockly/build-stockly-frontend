import React from 'react';

export default function WatchStocks(props) {
  return (
    <div className="company-container">
      {/* company-container flex row  */}
      {/* company-container children flex column  */}
      <div className="watchlist-symbols watchlist">
        <p>{props.stock.symbol}</p>
      </div>
      <div className="watchlist-lastprice watchlist">
        <p>{props.stock.previousClose}</p>
      </div>
      <div className="watchlist-change watchlist">
        <p>{props.stock.change}</p>
      </div>
      <div className="watchlist-percent watchlist">
        <p>{props.stock.changePercent}</p>
      </div>
    </div>
  );
}
