import { ADD_MEETUP,
    LEAVE_MEETUP, 
    DELETE_MEETUP, 
    EDIT_MEETUP, 
    SET_MEETUPS, 
    VIEW_MEETUP, 
    ATTEND_MEETUP,
    VIEW_USER } from '../actions/types';

const INITIAL_STATE = {
    meetups: [],
    viewMeetup: {},
    viewedUser: {}
};

export default (state = INITIAL_STATE, action) => {
console.log(action);
switch (action.type) {
    case SET_MEETUPS:
         return { ...state, meetups: action.payload }; 
    case ADD_MEETUP:
        return { ...state, meetups: [...state.meetups, action.payload] }; 
    case EDIT_MEETUP:
        return { ...state, meetups: [...state.meetups, action.payload] }; 
    case DELETE_MEETUP: 
        return { ...state, meetups: [...state.meetups, action.payload] }; 
    case VIEW_MEETUP: 
        return { ...state, viewMeetup: Object.assign({}, action.payload) };
    case ATTEND_MEETUP:
        return { ...state, meetups: [...state.meetups.map(m => m.id === action.payload.id ? m = action.payload : m = m)]};
    case LEAVE_MEETUP:
        return { ...state, meetups: [...state.meetups.map(m => m.id === action.payload.id ? m = action.payload : m = m)]};
    case VIEW_USER:
        return { ...state, viewedUser: action.payload };
    default:
        return state;
 }
};
