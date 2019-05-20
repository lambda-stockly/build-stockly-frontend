import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions';

const initialState = {
  isLoggingIn: false,
  isRegistering: false,
  token: localStorage
};

export const empReducer = (state = initialState, action) => {
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

    //     case REGISTER_START:
    //     return {
    //       ...state,
    //       isRegistering: true
    //     };
    //   case REGISTER_SUCCESS:
    //     return {
    //       ...state,
    //
    //     };
    //   case REGISTER_FAILURE:
    //     return {
    //       ...state,
    //       isRegistering: false
    //     };

    default:
      return state;
  }
};
