import React, { Component } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import {
  formatPercentChange,
  formatPrice,
  formatPriceChange
} from '../../helpers/formatNumbers';
import { axiosWithAuth } from '../auth/axiosWithAuth';

export default class WatchStocks extends Component {
  render() {
    console.log(this.props);
    return (
      <tr
        onClick={e =>
          this.props.deleteFavorite({ ticker: this.props.stock.ticker })
        }
      >
        <td>{this.props.stock.ticker}</td>
        {/* <td>{formatPrice(props.stock.price)}</td>
        <td>{formatPriceChange(props.stock.change)}</td>
        <td>{formatPercentChange(props.stock.changePercent)}</td> */}
        <td>{this.props.showDelete && <FaMinusCircle color="#0d122b" />}</td>
      </tr>
    );
  }
}
