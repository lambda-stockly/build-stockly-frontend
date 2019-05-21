/*
_____AVAILABLE ACTIONS_____
login()
register()

*/

import axios from 'axios';
// import { axiosWithAuth } from '../components/auth/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  console.log(creds);
  //passes ({email, password}) payload to `/auth/login`, and server checks if they are correct, if so, res.data returns a token and User Object
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://stockly-backend.herokuapp.com/auth/login', creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  //passes ({email, password, username}) payload to `/auth/register`, and server returns returns a ({token, user:{username,password}})
  dispatch({ type: REGISTER_START });
  console.log(creds);
  return axios
    .post('https://stockly-backend.herokuapp.com/auth/register', creds)

    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};

// export const FETCHING_STOCKS = 'FETCH_STOCKS';
// export const FETCH_STOCKS_SUCCESSFUL = 'FETCH_STOCKS_SUCCESSFUL';
// export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';

// export const getStockData = () => dispatch => {};

export const SAVE_TO_WATCHLIST = 'SAVE_TO_WATCHLIST';
export const addToWatchList = stockData => {
  return {
    type: SAVE_TO_WATCHLIST,
    payload: stockData
  };
};

export const GET_WATCHLIST = 'GET_WATCHLIST';
export const getWatchlist = watchList => ({
  type: GET_WATCHLIST,
  payload: watchList
});
