import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
  } from "./constants";
import {getToken} from '../../utils/authManager';

  const initialState= {
    token:  getToken() || null,
    loading: false,
    errorMessage: {},
    validating: false,
  };
  
  export function authReducer(
    state = initialState,
    action
  ){
    switch (action.type) {
      case LOGIN_LOADING:
          return {
            ...state,
            loading: action.payload
          };
      case LOGIN_ERROR:
          return {
            ...state,
            errorMessage: action.payload
          };
      case LOGIN_SUCCESS:
          return {
            ...state,
            token: action.payload
          };
      default:
        return state;
    }
  }
  