import React, { Component } from 'react';
import Stock from './Stock';
import { axiosWithAuth } from '../auth/axiosWithAuth';
// import axios from 'axios';
import './TopSearched.scss';

class TopSearched extends Component {
  state = {
    topSearched: []
  };

  componentDidMount() {
    axiosWithAuth()
      .get(`https://stockly-backend.herokuapp.com/top`)
      .then(res => {
        console.log(res);
        const topSearched = [
          res.data[0].ticker,
          res.data[1].ticker,
          res.data[2].ticker
        ];
        this.setState({ topSearched });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.topSearched.length > 0) {
      return (
        <div className="top-searched">
          <h5>Top Searched Stocks</h5>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>Change</th>
                <th>% Change</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.topSearched.map((stock, i) => (
                <Stock key={i} stock={this.state.topSearched[i]} />
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default TopSearched;
