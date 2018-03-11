import { ADD_MEETUP, DELETE_MEETUP, EDIT_MEETUP, SET_MEETUPS, VIEW_MEETUP } from '../actions/types';

const INITIAL_STATE = {
    meetups: [],
    viewMeetup: {}
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
        return { ...state, viewMeetup: Object.assign(state.viewMeetup, action.payload) }; 
  
    default:
        return state;
 }
};
