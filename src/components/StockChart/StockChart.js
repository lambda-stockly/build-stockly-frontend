import React, { Component } from 'react';
import 'react-vis/dist/style.css';
import axios from 'axios';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

class StockChart extends Component {
  state = {
    data: [],
    error: null
  };

  fetchData = symbol => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getMonthlyAdjusted = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`;

    axios
      .get(getMonthlyAdjusted)
      .then(res => {
        const obj = res.data['Monthly Time Series'];

        const data = Object.entries(obj).map(arr => ({
          x: new Date(arr[0]).getTime(),
          y: Number(parseFloat(arr[1]['4. close'], 10).toFixed(2))
        }));

        this.setState({ data });
      })
      .catch(err => {
        this.setState({ error: 'ERROR getting chart for this security' });
      });
  };

  componentDidMount() {
    this.fetchData(this.props.symbol);
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.fetchData(this.props.symbol);
    }
  }

  render() {
    return this.state.error ? (
      <h4 style={{ color: 'red' }}>{this.state.error}</h4>
    ) : (
      <XYPlot
        xType="time"
        width={610}
        height={400}
        animation
        margin={{ left: 50 }}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date" />
        <YAxis title="Price" />
        <LineSeries data={this.state.data} />
      </XYPlot>
    );
  }
}

export default StockChart;
