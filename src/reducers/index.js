import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SAVE_TO_WATCHLIST,
  GET_WATCHLIST,
  REMOVE_FAVORITE,
  REMOVE_FAVORITE_SUCCESS
} from '../actions';

const initialState = {
  isLoggingIn: false,
  isRegistering: false,
  token: localStorage.getItem('token'),
  watchList: []
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
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false
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
        watchList: action.payload
        // watchlist is an array of stock data. IF none are saved, display google microsoft, etc,
        // ELSE display their current watchlist
      };
    case REMOVE_FAVORITE:
      return {
        ...state
      };
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        watchList: action.payload
      };
    case GET_WATCHLIST:
      console.log(action.payload);
      return {
        ...state,
        watchList: action.payload
      };

    default:
      return state;
  }
};
