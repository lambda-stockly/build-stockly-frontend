import React, { Component } from 'react';
import Sentiment from '../Sentiment';
import './StockInfo.scss';
import axios from 'axios';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { connect } from 'react-redux';
import { addToWatchList } from '../../actions';
import {
  formatPrice,
  formatPercentChange,
  formatPriceChange
} from '../../helpers/formatNumbers';

const API_KEY = process.env.REACT_APP_API_KEY;

class StockInfo extends Component {
  state = {
    symbol: this.props.symbol,
    name: this.props.name,
    open: '',
    high: '',
    low: '',
    price: '',
    volume: '',
    latestTradingDay: '',
    previousClose: '',
    change: '',
    changePercent: '',
    sentiment: null,
    technicalAnalysis: null
  };

  fetchData = symbol => {
    const getQuoteUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const getWeeklyAdjusted = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
    const getActionThresholds = `https://stockly-backend.herokuapp.com/stocks/${symbol}`;

    axios
      .get(getQuoteUrl)
      .then(res => {
        const data = res.data['Global Quote'];
        this.setState({
          open: data['02. open'],
          high: data['03. high'],
          low: data['04. low'],
          price: data['05. price'],
          volume: data['06. volume'],
          latestTradingDay: data['07. latest trading day'],
          previousClose: data['08. previous close'],
          change: data['09. change'],
          changePercent: data['10. change percent']
        });

        return axios
          .get(getWeeklyAdjusted)
          .then(res => {
            console.log(res.data['Weekly Adjusted Time Series']);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    axiosWithAuth()
      .get(getActionThresholds)
      .then(res => {
        console.log(res.data.actionThresholds);
        this.setState({
          sentiment: res.data.actionThresholds.Sentiment,
          technicalAnalysis: res.data.actionThresholds.TA
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData(this.state.symbol);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.setState(
        {
          symbol: this.props.symbol,
          name: this.props.name
        },
        () => this.fetchData(this.state.symbol)
      );
    }
  }

  addToWatchlist = e => {
    e.preventDefault();
    // const symbol = this.state.symbol;
    const obj = { ...this.state };
    this.props.addToWatchList(obj);
    // console.log(`Add ${symbol} to this user's watchlist`);
  };

  render() {
    let color;
    if (this.state.change < 0) {
      color = 'colorRed';
    } else {
      color = 'colorGreen';
    }
    return (
      <div className="StockInfo">
        <div className="StockInfo__header">
          <div>
            <h3 className="StockInfo__title">{`${this.state.name} (${
              this.state.symbol
            })`}</h3>
            <p className="StockInfo__subtitle">
              Real Time Price. Currency in USD.
            </p>
          </div>
        </div>
        {this.state.price && (
          <div>
            <div className="StockInfo__price-and-change">
              <h2>{formatPrice(this.state.price)}</h2>
              <h3 className={color}>{formatPriceChange(this.state.change)}</h3>
              <h3 className={color}>
                {formatPercentChange(this.state.changePercent)}
              </h3>
            </div>

            <div>
              <div className="StockInfo__details">
                Previous Close{' '}
                <span>{formatPrice(this.state.previousClose)}</span>
              </div>
              <div className="StockInfo__details">
                Open <span>{formatPrice(this.state.open)}</span>
              </div>
              <div className="StockInfo__details">
                Day's Range{' '}
                <span>{`${formatPrice(this.state.low)} - ${formatPrice(
                  this.state.high
                )}`}</span>
              </div>
              <div className="StockInfo__details">
                Volume <span>{this.state.volume}</span>
              </div>
            </div>
            <button
              onClick={this.addToWatchlist}
              className="StockInfo__add-watchlist"
            >
              Add to Watchlist
            </button>
          </div>
        )}

        {this.state.sentiment !== null && (
          <Sentiment
            sentiment={this.state.sentiment}
            technicalAnalysis={this.state.technicalAnalysis}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchList
  };
};

export default connect(
  mapStateToProps,
  { addToWatchList }
)(StockInfo);
