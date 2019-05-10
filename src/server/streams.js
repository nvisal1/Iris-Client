import axios from 'axios';
import { getToken } from '../services/tokenService';

export default axios.create({
    baseURL: 'http://168.61.222.185:3001',
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')},
})