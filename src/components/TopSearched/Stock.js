import React, { Component } from 'react';
import axios from 'axios';
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
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
          this.props.stock
        }&apikey=${API_KEY}`
      )
      .then(res => {
        console.log(res.data['Global Quote']);
        this.setState({
          price: res.data['Global Quote']['05. price'],
          change: res.data['Global Quote']['09. change'],
          changePercent: res.data['Global Quote']['10. change percent']
        });
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   error:
        // })
      });
  }

  render() {
    const color = this.state.change < 0 ? 'red' : 'green';
    return (
      <tr>
        <td>{this.props.stock}</td>
        <td>{formatPrice(this.state.price)}</td>
        <td style={{ color: color }}>{formatPriceChange(this.state.change)}</td>
        <td style={{ color: color }}>
          {formatPercentChange(this.state.changePercent)}
        </td>
      </tr>
    );
  }
}

export default Stock;
