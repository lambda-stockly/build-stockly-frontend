import React, { Component } from 'react';
import './WatchList.scss';
import { getWatchlist } from '../../actions';
import { connect } from 'react-redux';
import WatchStocks from './WatchStocks';
class WatchList extends Component {
  render() {
    let watchListArray = this.props.watchList;
    console.log(watchListArray);
    return (
      <div className="watchlist-container">
        <h3>WatchList</h3>
        <div className="company-container">
          <p className="watchlist">Symbol</p>
          <p className="watchlist">Last Price</p>
          <p className="watchlist">Change</p>
          <p className="watchlist">% Change</p>
        </div>
        {watchListArray.map((stock, i) => (
          <WatchStocks key={i} index={i} stock={stock} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //takes watch state and removes duplicate entries
  const uniqueArr = state.watchList.filter((stock, i, self) => {
    return (
      i ===
      self.findIndex(items => {
        return items.name === stock.name;
      })
    );
  });
  console.log(uniqueArr);

  return {
    watchList: uniqueArr
  };
};
export default connect(
  mapStateToProps,
  { getWatchlist }
)(WatchList);
