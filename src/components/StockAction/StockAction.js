import React from 'react';
import './StockAction.scss';

const StockAction = props => {
  let className;
  if (props.action === 'buy') {
    className = 'stock-action stock-action__buy';
  } else if (props.action === 'sell') {
    className = 'stock-action stock-action__sell';
  } else if (props.action === 'hold') {
    className = 'stock-action stock-action__hold';
  }

  return (
    <>
      <div className={className}>{props.action}</div>
    </>
  );
};

export default StockAction;
