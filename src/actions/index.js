import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_FAILURE_ERROR = 'LOGIN_FAILURE_ERROR';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://stockly-backend.herokuapp.com/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  //passes ({email, password, username}) payload to `/auth/register`, and server returns returns a ({token, user:{username,password}})
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://stockly-backend.herokuapp.com/auth/register', creds)

    .then(res => {
      localStorage.setItem('token', res.data.token);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
    })
    .catch(err =>
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message })
    );
};

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

export const FETCHING_WATCH_LIST = 'FETCHING_WATCH_LIST';
export const GET_WATCH_LIST_SUCCESS = 'GET_WATCH_LIST_SUCCESS';
export const GET_WATCH_LIST_FAILURE = 'GET_WATCH_LIST_FAILURE';

export const fetchWatchList = payload => dispatch => {
  dispatch({ type: FETCHING_WATCH_LIST });
  return axios
    .post('https://stockly-backend.herokuapp.com/favorites')
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};
