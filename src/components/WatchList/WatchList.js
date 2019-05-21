import React, { Component } from 'react';
import './WatchList.scss';
import { getWatchlist } from '../../actions';
import { connect } from 'react-redux';
import WatchStocks from './WatchStocks';
class WatchList extends Component {
  render() {
    const watchListArray = this.props.watchList;
    return (
      <div className="watchlist-container">
        <h3>WatchList</h3>
        {watchListArray.map((stock, i) => (
          <WatchStocks key={i} index={i} stock={stock} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchList
  };
};
export default connect(
  mapStateToProps,
  { getWatchlist }
)(WatchList);
