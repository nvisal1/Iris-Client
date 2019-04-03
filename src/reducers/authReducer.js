import { 
    REGISTER,
    LOGIN,
    LOGOUT,
    GETUSER
} from "../actions/types";
import { 
    decodeToken,
    storeToken, 
    removeToken,
    getToken
} from "../services/tokenService";

const INITIAL_STATE = {
    username: null,
    email: null,
    id: null
};  

export default (state = {}, action) => {
    switch (action.type) {
        case REGISTER:
            storeToken(action.payload);
            return { 
                ...state,
                username: decodeToken(action.payload).username,
                email: decodeToken(action.payload).email,
                id: decodeToken(action.payload)._id,
            }
        case LOGIN: 
            storeToken(action.payload);
            return {
                ...state,
                username: decodeToken(action.payload).username,
                email: decodeToken(action.payload).email,
                id: decodeToken(action.payload)._id,
            }
        case LOGOUT: 
            removeToken();
            return { 
                ...state,
                username: null,
                email: null,
                id: null,
            }
        case GETUSER:
            console.log('reducer')
            return { 
                ...state,
                username: getToken().username,
                email: getToken().email,
                id: getToken()._id,
            }
        default: 
            return state;
    }
};