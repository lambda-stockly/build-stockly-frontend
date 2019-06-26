import React, { Component } from 'react';
import axios from 'axios';
import { FaMinusCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { removeFromWatchList } from '../../actions';
import {
  formatPercentChange,
  formatPrice,
  formatPriceChange
} from '../../helpers/formatNumbers';

class Stock extends Component {
  state = {
    price: '',
    change: '',
    changePercent: '',
    error: ''
  };

  componentDidMount() {
    console.log(this.props.ticker);
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
          this.props.ticker
        }&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({
          price: res.data['Global Quote']['05. price'],
          change: res.data['Global Quote']['09. change'],
          changePercent: res.data['Global Quote']['10. change percent']
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: 'API Limit Reached'
        });
      });
  }

  handleClick = () => {
    this.props.removeFromWatchList(this.props.ticker);
  };

  render() {
    const color = this.state.change < 0 ? 'red' : 'green';
    return (
      <tr>
        <td>{this.props.ticker}</td>
        <td>{formatPrice(this.state.price)}</td>
        <td style={{ color: color }}>{formatPriceChange(this.state.change)}</td>
        <td style={{ color: color }}>
          {formatPercentChange(this.state.changePercent)}
        </td>
        <td>
          <FaMinusCircle
            className="watchlist-remove"
            onClick={this.handleClick}
            style={{ cursor: 'pointer' }}
          />
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { removeFromWatchList }
)(Stock);
