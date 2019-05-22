import React from 'react';

function formatPrice(numAsString) {
  return parseFloat(numAsString, 10).toFixed(2);
}

function formatPriceChange(numAsStr) {
  const strToNum = parseFloat(numAsStr, 10).toFixed(2);
  return Math.sign(strToNum) > 0
    ? '+' + strToNum
    : parseFloat(numAsStr, 10).toFixed(2);
}

export default function WatchStocks(props) {
  return (
    <tr>
      <td>{props.stock.symbol}</td>
      <td>{formatPrice(props.stock.price)}</td>
      <td>{formatPriceChange(props.stock.change)}</td>
      <td>{props.stock.changePercent}</td>
    </tr>
  );
}
