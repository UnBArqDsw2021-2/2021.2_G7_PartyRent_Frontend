import axios, { AxiosResponse } from 'axios';
import { PostType } from '../models/post.interface';

const api = axios.create({
    baseURL: 'http://localhost:8000/',
});

export default api;
