import decode from 'jwt-decode';

export const storeToken = (token) => {
    localStorage.setItem('TOKEN', token);
}

export const getToken = () => {
    const token = localStorage.getItem('TOKEN');
    if(token) {
        return decode(token).user;
    }
    return null;
  
}

export const decodeToken = (token) => {
    return decode(token).user;
}

export const removeToken = () => {
    localStorage.removeItem('TOKEN');
}