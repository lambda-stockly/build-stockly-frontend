import React from 'react';

export default function WatchStocks(props) {
  return (
    <div className="company-container">
      {/* company-container flex row  */}
      {/* company-container children flex column  */}
      <div className="watchlist-symbols watchlist">
        {props.index === 0 && <p>Symbol</p>}
        <p>{props.stock.symbol}</p>
      </div>
      <div className="watchlist-lastprice watchlist">
        {props.index === 0 && <p>Last Price</p>}
        <p>{props.stock.previousClose}</p>
      </div>
      <div className="watchlist-change watchlist">
        {props.index === 0 && <p>Change</p>}
        <p>{props.stock.change}</p>
      </div>
      <div className="watchlist-percent watchlist">
        {props.index === 0 && <p>% change</p>}
        <p>{props.stock.changePercent}</p>
      </div>
    </div>
  );
}
