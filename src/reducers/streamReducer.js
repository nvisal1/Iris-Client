import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,
    REGISTER
} from '../actions/types';
import _ from 'lodash';
import Register from '../components/auth/Register';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case CREATE_STREAM: 
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_STREAM: 
            return _.omit(state, action.payload);
        case EDIT_STREAM: 
            return { ...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}