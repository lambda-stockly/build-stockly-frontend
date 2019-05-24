import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ADD_WATCHLIST_SUCCESS,
  GET_WATCHLIST_SUCCESS,
  REMOVE_WATCHLIST_SUCCESS,
  MAKE_SEARCH_SELECTION
} from '../actions';

const initialState = {
  isLoggingIn: false,
  isRegistering: false,
  token: localStorage.getItem('token'),
  watchList: [],
  error: '',
  selectedStock: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: `*${action.payload}`
      };

    case REGISTER_START:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false
      };
    case ADD_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchList: action.payload
      };
    case GET_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchList: action.payload
      };
    case REMOVE_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchList: action.payload
      };
    case MAKE_SEARCH_SELECTION:
      return {
        ...state,
        selectedStock: action.payload
      };

    default:
      return state;
  }
};
