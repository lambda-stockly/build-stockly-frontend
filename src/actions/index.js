import axios from 'axios';
import { axiosWithAuth } from '../components/auth/axiosWithAuth';

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

export const ADD_WATCHLIST_START = 'ADD_WATCHLIST_START';
export const ADD_WATCHLIST_SUCCESS = 'ADD_WATCHLIST_SUCESS';
export const ADD_WATCHLIST_FAILURE = 'ADD_WATCHLIST_FAILURE';

export const addToWatchList = ticker => dispatch => {
  dispatch({ type: ADD_WATCHLIST_START });

  axiosWithAuth()
    .post('https://stockly-backend.herokuapp.com/favorites', { ticker })
    .then(res => {
      dispatch({ type: ADD_WATCHLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_WATCHLIST_FAILURE, payload: err.message });
    });
};

export const GET_WATCHLIST_START = 'GET_WATCHLIST_START';
export const GET_WATCHLIST_SUCCESS = 'GET_WATCHLIST_SUCESS';
export const GET_WATCHLIST_FAILURE = 'GET_WATCHLIST_FAILURE';

export const getWatchList = () => dispatch => {
  dispatch({ type: GET_WATCHLIST_START });

  axiosWithAuth()
    .get('https://stockly-backend.herokuapp.com/favorites')
    .then(res => {
      dispatch({ type: GET_WATCHLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_WATCHLIST_FAILURE, payload: err.message });
    });
};

export const REMOVE_WATCHLIST_START = 'REMOVE_WATCHLIST_START';
export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCESS';
export const REMOVE_WATCHLIST_FAILURE = 'REMOVE_WATCHLIST_FAILURE';

export const removeFromWatchList = ticker => dispatch => {
  dispatch({ type: REMOVE_WATCHLIST_START });

  axiosWithAuth()
    .delete('https://stockly-backend.herokuapp.com/favorites', {
      data: { ticker }
    })
    .then(res => {
      dispatch({ type: REMOVE_WATCHLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REMOVE_WATCHLIST_FAILURE, payload: err.message });
    });
};

export const MAKE_SEARCH_SELECTION = 'MAKE_SEARCH_SELECTION';

export const makeSearchSelection = selection => dispatch => {
  dispatch({ type: MAKE_SEARCH_SELECTION, payload: selection });
};
