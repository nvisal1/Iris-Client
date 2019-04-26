import axios from 'axios';
import { getToken } from '../services/tokenService';

export default axios.create({
    baseURL: 'https://iris-ingress.centralus.cloudapp.azure.com',
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')},
})