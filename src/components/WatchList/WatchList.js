import React, { Component } from 'react';
import { getWatchList } from '../../actions';
import { connect } from 'react-redux';
import Stock from './Stock';

class WatchList extends Component {
  componentDidMount() {
    this.props.getWatchList();
  }

  render() {
    let watchListArray = this.props.watchList;
    return !this.props.watchList.length ? null : (
      <div className="watchlist">
        <h4 className="table-title">Stocks You Are Watching</h4>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change</th>
              <th>%Change </th>
            </tr>
          </thead>
          <tbody>
            {watchListArray.map(stock => (
              <Stock key={stock.id} ticker={stock.ticker} />
            ))}
          </tbody>
        </table>
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
  { getWatchList }
)(WatchList);
