import axios from 'axios';

const instance = axios.create({
    baseURL: "https://c-thru-inspections.firebaseio.com/"
});

export default instance;