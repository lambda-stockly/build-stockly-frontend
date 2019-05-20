import axios from 'axios';
// import {axiosWithAuth} from '../axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  //passes ({email, password}) payload to `/auth/login`, and server checks if they are correct, if so, res.data returns a token and User Object
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/auth/login', creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
  //passes ({email, password, username}) payload to `/auth/register`, and server returns returns a ({token, user:{username,password}})
  dispatch({ type: REGISTER_START });
  return axios
    .post('http://localhost:5000/auth/register', creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

//request data from alphavantage
