import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './../actionTypes/login.actionTypes';
import Axios from 'axios';

export const loginUser = (data) => dispatch => {
    dispatch({type: LOGIN_LOADING})
    return Axios.get(`http://localhost:5000/user/login?username=${data.username}&password=${data.password}`)
      .then(res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
        debugger
        return data;
      })
      .catch(err => {
        dispatch({type: LOGIN_FAILURE, payload: err});
        throw err;
      })
} 
