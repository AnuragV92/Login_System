import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './../actionTypes/login.actionTypes';

const INITIAL_STATE = {
    loading: false,
    data: null,
    error: null
}

const loginReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
      case LOGIN_LOADING:
          return {
              loading: true,
              data: null,
              error: null
          }
      case LOGIN_SUCCESS:
            return {
                loading: false,
                data: payload
            }
      case LOGIN_FAILURE:
            return {
                loading: false,
                error: payload
            }
      default:
        return state
    }
}

export default loginReducer;