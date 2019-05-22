import React, { Component } from 'react';
import './WatchList.scss';
import { getWatchlist } from '../../actions';
import { connect } from 'react-redux';
import WatchStocks from './WatchStocks';

class WatchList extends Component {
  state = {
    showDelete: false
  };

  handleClick = e => {
    e.preventDefault();
    const showDelete = this.state.showDelete;
    this.setState({
      showDelete: !showDelete
    });
  };
  render() {
    let watchListArray = this.props.watchList;

    return !this.props.watchList.length ? null : (
      <div className="watchlist-container">
        <h4 className="watchlist-title">Watchlist / Portfolio</h4>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>% Change</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {watchListArray.map((stock, i) => (
              <WatchStocks
                key={i}
                index={i}
                stock={stock}
                showDelete={this.state.showDelete}
              />
            ))}
          </tbody>
        </table>
        <button className="edit-button" onClick={this.handleClick}>
          <span>{this.state.showDelete ? 'Save' : 'Edit'}</span>
        </button>
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

  return {
    watchList: uniqueArr
  };
};
export default connect(
  mapStateToProps,
  { getWatchlist }
)(WatchList);
