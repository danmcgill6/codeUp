import { Actions } from 'react-native-router-flux';
import axios from 'axios';

    ATTEND_MEETUP,
    LEAVE_MEETUP,
} from './types';


export const attend = (meetup) => {
    return {
        type: ADD_MEETUP,    
        payload: meetup
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

