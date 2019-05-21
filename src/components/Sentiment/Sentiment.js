import React, { Component } from 'react';
import './Sentiment.scss';

class Sentiment extends Component {
  render() {
    return (
      <div className="Sentiment">
        <h3>Sentiment Analysis</h3>
        <p>
          This is dummy data returned from backend...looking to make this into a
          semi circle chart
        </p>
        <h4>Buy: {this.props.sentiment.buy}</h4>
        <h4>Sell:{this.props.sentiment.sell}</h4>
        <h4>Hold:{this.props.sentiment.hold}</h4>
      </div>
    );
  }
}

export default Sentiment;
