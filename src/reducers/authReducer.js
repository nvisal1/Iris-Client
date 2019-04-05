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

export default (state = INITIAL_STATE, action) => {
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
            if (action.payload) {
                storeToken(action.payload);
                return {
                    ...state,
                    username: decodeToken(action.payload).username,
                    email: decodeToken(action.payload).email,
                    id: decodeToken(action.payload)._id,
                }
            } else {
                return {
                    ...state,
                }
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
            return { 
                ...state,
                username: getToken() ? getToken().username : null,
                email: getToken() ? getToken().email : null,
                id: getToken() ? getToken()._id : null,
            }
        default: 
            return state;
    }
};