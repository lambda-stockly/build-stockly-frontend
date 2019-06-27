import React, { Component } from 'react';
import Sentiment from '../Sentiment';
import axios from 'axios';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { connect } from 'react-redux';
import { addToWatchList } from '../../actions';
import { GridLoader } from 'react-spinners';
import StockChart from '../StockChart';
import './StockInfo.scss';

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
    watchListError: null,
    sentimentAnalysis: null,
    technicalAnalysis: null,
    historicalAnalysis: null,
    futureAnalysis: null
  };

  fetchData = symbol => {
    // const getWeeklyAdjusted = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
    const getQuoteUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
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

        return axiosWithAuth()
          .get(getActionThresholds)
          .then(res => {
            this.setState({
              sentimentAnalysis: res.data.actionThresholds.Sentiment,
              technicalAnalysis: res.data.actionThresholds.TA,
              futureAnalysis: res.data.actionThresholds.Future,
              historicalAnalysis: res.data.actionThresholds.Historical
            });
          })
          .catch(err => console.log(err));
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.symbol !== this.props.symbol) {
      this.setState({
        sentimentAnalysis: null,
        technicalAnalysis: null,
        futureAnalysis: null,
        historicalAnalysis: null
      });
    }
  }

  addToWatchlist = () => {
    if (this.props.watchList.length > 2) {
      this.setState({
        watchListError: 'Watchlist can only contain up to 3 stocks'
      });
    } else {
      this.props.addToWatchList(this.state.symbol);
    }
  };

  render() {
    const color = this.state.change < 0 ? 'red' : 'green';

    return (
      <div>
        <div className="stock-info-stock-chart">
          <div className="StockInfo">
            <div className="StockInfo__header">
              <div style={{ position: 'relative' }}>
                <h2 className="StockInfo__title">{`${this.state.name} (${
                  this.state.symbol
                })`}</h2>
                <p className="StockInfo__subtitle">
                  Real Time Price. Currency in USD.
                </p>
              </div>
            </div>
            {this.state.price && (
              <div>
                <div className="StockInfo__price-and-change">
                  <h2>{formatPrice(this.state.price)}</h2>
                  <h3 className={color}>
                    {formatPriceChange(this.state.change)}
                  </h3>
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
                <div style={{ position: 'relative' }}>
                  {this.state.sentimentAnalysis && (
                    <button
                      onClick={this.addToWatchlist}
                      className="StockInfo__add-watchlist"
                    >
                      Add to Watchlist
                    </button>
                  )}
                  {this.state.watchListError && (
                    <div className="Stock-info__watchlist-error">
                      {this.state.watchListError}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <StockChart symbol={this.props.symbol} />
        </div>
        {this.state.sentimentAnalysis ? (
          <Sentiment
            sentimentAnalysis={this.state.sentimentAnalysis}
            technicalAnalysis={this.state.technicalAnalysis}
            futureAnalysis={this.state.futureAnalysis}
            historicalAnalysis={this.state.historicalAnalysis}
            symbol={this.props.symbol}
            company={this.props.name}
          />
        ) : (
          <div className="StockInfo__loading-indicator">
            <h3>
              Analyzing {`${this.props.symbol}'s`} past performance and public
              sentiment
            </h3>
            <GridLoader color={'#5ae5dd'} size={25} sizeUnit={'px'} />
          </div>
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
