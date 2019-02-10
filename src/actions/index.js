import streams from '../server/streams';
import history from '../history';
import { 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM  
} from './types';

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: CREATE_STREAM, payload: response.data });
        if (response.status === 200) {
            history.push('/');
        }
    };
};

export const fetchStream = (streamId) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${streamId}`);
        dispatch({ type: FETCH_STREAM, payload: response.data });
    };
};

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: FETCH_STREAMS, payload: response.data });
    };
};

export const editStream = (streamId, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${streamId}`, formValues);
        // dispatch({ type: EDIT_STREAM, payload: response.data });
        if (response.status === 200) {
            history.push('/');
        }
    };
};

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        const response = await streams.delete(`/streams/${streamId}`);
        dispatch({ type: DELETE_STREAM, payload: response.data });
    };
};