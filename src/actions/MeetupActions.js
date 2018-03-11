import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { 
    SET_MEETUPS,
    ADD_MEETUP,
    DELETE_MEETUP,
    EDIT_MEETUP,
    VIEW_MEETUP ,
    ATTEND_MEETUP,
    LEAVE_MEETUP,
} from './types';

export const attendMeeetup = (meetup,user) => {
    return (dispatch) => {
        axios.put(`http://localhost:8080/api/users/attending${user.id}`, { meetupId: meetup.id })
            .then(res => Actions.map());
    }; 
};

export const viewMeetup = (meetup) => {
    return (dispatch) => {
        dispatch({ type: VIEW_MEETUP, payload: meetup });
        Actions.singleMeetup();
    }; 
};

//thunks
export const fetchMeetupData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/meetups')
            .then(res => dispatch({ type: SET_MEETUPS, payload: res.data }));
    };
};

