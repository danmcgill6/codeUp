import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MeetupReducer from './MeetupReducer';

export default combineReducers({
    auth: AuthReducer,
    meetups: MeetupReducer
});
