import React, { Component } from 'react';
import './StockInfo.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToWatchList } from '../../actions';
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
    changePercent: ''
  };

  fetchData = symbol => {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data['Global Quote']);
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
      })
      .catch(err => console.log(err));
  };

  fetchHistoricalData = symbol => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
    axios
      .get(url)
      .then(res => console.log(res))
      .err(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData(this.state.symbol);

    // const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=${API_KEY}`;
    // axios
    //   .get(url)
    //   .then(res => console.log(res))
    //   .err(err => console.log(err));
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

    const symbol = this.state.symbol;
    const obj = { ...this.state };

    this.props.addToWatchList(obj);
    console.log(`Add ${symbol} to this user's watchlist`);
  };

  render() {
    console.log(this.props);
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
          <button
            onClick={this.addToWatchlist}
            className="StockInfo__add-watchlist"
          >
            Add to Watchlist
          </button>
        </div>
        {this.state.price !== undefined && (
          <div>
            <div className="StockInfo__price-and-change">
              <h2>{Number(this.state.price)}</h2>
              <h3 className={color}>{Number(this.state.change)}</h3>
              <h3 className={color}>({this.state.changePercent})</h3>
            </div>

            <div>
              <div className="StockInfo__details">
                Previous Close <span>{this.state.previousClose}</span>
              </div>
              <div className="StockInfo__details">
                Open <span>{this.state.open}</span>
              </div>
              <div className="StockInfo__details">
                Day's Range{' '}
                <span>{`${this.state.low} - ${this.state.high}`}</span>
              </div>
              <div className="StockInfo__details">
                Volume <span>{this.state.volume}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    watchList: state.watchList
  };
};

export default connect(
  mapStateToProps,
  { addToWatchList }
)(StockInfo);
