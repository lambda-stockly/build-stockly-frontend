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
    const getWeeklyAdjusted = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`;

    axios
      .get(getWeeklyAdjusted)
      .then(res => {
        console.log(res.data);
        const obj = res.data['Monthly Time Series'];

        const data = Object.entries(obj).map(arr => ({
          x: new Date(arr[0]).getTime(),
          y: Number(parseFloat(arr[1]['4. close'], 10).toFixed(2))
        }));

        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
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
    return (
      <XYPlot xType="time" width={500} height={300}>
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
