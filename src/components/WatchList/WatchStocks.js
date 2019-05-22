import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import {
  formatPercentChange,
  formatPrice,
  formatPriceChange
} from '../../helpers/formatNumbers';

export default function WatchStocks(props) {
  return (
    <tr>
      <td>{props.stock.symbol}</td>
      <td>{formatPrice(props.stock.price)}</td>
      <td>{formatPriceChange(props.stock.change)}</td>
      <td>{formatPercentChange(props.stock.changePercent)}</td>
      <td>{props.showDelete && <FaMinusCircle color="#0d122b" />}</td>
    </tr>
  );
}
