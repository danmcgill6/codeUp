
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER 
} from './types';

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => { 
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        axios.put('http://localhost:8080/auth/local/login', { email, password })
            .then(res => {
                 loginUserSuccess(dispatch, res.data);
            })
        .catch(() => {
           dispatch(loginUserFail(dispatch))
        });
    };
};

export const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,    
        payload: text
    };
};

export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};
