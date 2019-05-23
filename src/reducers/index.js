import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SAVE_TO_WATCHLIST,
  GET_WATCHLIST
} from '../actions';

const initialState = {
  isLoggingIn: false,
  isRegistering: false,
  token: localStorage.getItem('token'),
  watchList: [],
  error: ''
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
    case SAVE_TO_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload]
        // watchlist is an array of stock data. IF none are saved, display google microsoft, etc,
        // ELSE display their current watchlist
      };
    case GET_WATCHLIST:
      return {
        watchList: state.watchList
      };

    default:
      return state;
  }
};
