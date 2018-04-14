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

export const attendMeetup = (meetup, user) => {
    return (dispatch) => {
        axios.put(`http://localhost:8080/api/users/attending/${user.id}`, { meetupId: meetup.id })
            .then(res => {
                dispatch({ type: ATTEND_MEETUP, payload: res.data });
                Actions.meetups();
            });
    }; 
};

export const createMeetup = (body) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/meetups', body)
            .then(res => {
                dispatch({ type: ADD_MEETUP, payload: res.data });
                console.log(res.data);
                Actions.map();
            });
    }; 
};

export const leaveMeetup = (meetup, user) => {
    return (dispatch) => {
        axios.put(`http://localhost:8080/api/users/leave/${user.id}`, { meetupId: meetup.id })
            .then(res => {
                dispatch({ type: LEAVE_MEETUP, payload: res.data[1] });
                Actions.map();
            });
    }; 
};

export const viewMeetup = (meetup) => {
    return (dispatch) => {
        dispatch({ type: VIEW_MEETUP, payload: meetup });
        Actions.singleMeetup();
    }; 
};

export const fetchMeetupData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/meetups')
            .then(res => dispatch({ type: SET_MEETUPS, payload: res.data }));
    };
};

