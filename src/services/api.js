import axios from 'axios';
// API Key: d25bb446019c894979e39202b38d4c6d
// Base da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api