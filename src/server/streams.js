import axios from 'axios';
import { getToken } from '../services/tokenService';

export default axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')},
})