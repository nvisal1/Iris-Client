import streams from '../server/streams';
import history from '../history';
import { 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_USER_STREAMS,
    REGISTER,
    LOGIN,
    GETUSER,
    LOGOUT,
    SEARCH_STREAMS
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
        dispatch({ type: EDIT_STREAM, payload: response.data });
        if (response.status === 200) {
            history.push('/');
        }
    };
};

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        const response = await streams.delete(`/streams/${streamId}`);
        dispatch({ type: DELETE_STREAM, payload: response.data });
        if (response.status === 200) {
            history.push('/');
        }
    };
};

export const searchStreams = (query) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams`, {
            params: {
                text: query
            }
        });
        dispatch({ type: SEARCH_STREAMS, payload: response.data });
    };
};

export const fetchUserStreams = (userId) => {
    return async (dispatch) => {
        const response = await streams.get(`user/${userId}/streams`);
        console.log(response);
        dispatch({ type: FETCH_USER_STREAMS, payload: response.data });
    };
}

export const register = (user) => {
    return async (dispatch) => {
        const response = await streams.post('/users', user);
        dispatch({ type: REGISTER, payload: response.data.token });
        console.log(response);
        if (response.status === 200) {
            history.push('/');
        }
    }
}

export const signIn = (loginInfo) => {
    return async (dispatch) => {
        try {
            const response = await streams.post('/users/login', loginInfo);
            dispatch({ type: LOGIN, payload: response.data.token ? response.data.token : null });
            if (response.status === 200) {
                history.push('/');
            }
        } catch (error) {
            switch (error.response.status) {
                case 401:
                    history.push('/login', {error: 'Username or Password is incorrect'});
                default: 
                    history.push('/login', {error: 'An unexpected error has occured'});
            }
        }
     
    }
}

export const signOut = () => {
    history.push('/login');
    return {
        type: LOGOUT,
    };
}

export const getUser = () => {
    return {
        type: GETUSER,
    };
}