import decode from 'jwt-decode';

export const storeToken = (token) => {
    localStorage.setItem('TOKEN', token);
}

export const getToken = () => {
    const token = localStorage.getItem('TOKEN');
    return decode(token).user;
}

export const decodeToken = (token) => {
    return decode(token).user;
}

export const removeToken = () => {
    localStorage.removeItem('TOKEN');
}