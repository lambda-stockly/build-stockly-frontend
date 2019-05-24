import React, { Component } from 'react';
import Stock from './Stock';
import { axiosWithAuth } from '../auth/axiosWithAuth';

class TopSearched extends Component {
  state = {
    topSearched: []
  };

  componentDidMount() {
    axiosWithAuth()
      .get(`https://stockly-backend.herokuapp.com/top`)
      .then(res => {
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
    return this.state.topSearched.length === 0 ? null : (
      <div className="top-searched">
        <h4 className="table-title">Most Searched Stocks</h4>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change</th>
              <th>%Change </th>
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
  }
}

export default TopSearched;
