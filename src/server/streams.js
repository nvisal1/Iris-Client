import axios from 'axios';
import { getToken } from '../services/tokenService';

export default axios.create({
    baseURL: 'http://40.122.30.104:3001',
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')},
})