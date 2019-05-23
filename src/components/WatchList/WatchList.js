import React, { Component } from 'react';
import './WatchList.scss';
import { getWatchlist, deleteFavorite } from '../../actions';
import { connect } from 'react-redux';
import WatchStocks from './WatchStocks';

class WatchList extends Component {
  state = {
    showDelete: false
  };
  componentDidMount() {
    this.props.getWatchlist();
  }
  handleClick = e => {
    e.preventDefault();
    const showDelete = this.state.showDelete;
    this.setState({
      showDelete: !showDelete
    });
  };

  render() {
    let watchListArray = this.props.watchList;
    console.log(this.props.watchList);

    return (
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
                deleteFavorite={this.props.deleteFavorite}
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
  console.log(state);

  return {
    watchList: state.watchList
  };
};
export default connect(
  mapStateToProps,
  { getWatchlist, deleteFavorite }
)(WatchList);
