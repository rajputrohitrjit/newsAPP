import {NEWS_API_KEY} from './config';
import axios from './axios';

const getArticles = (topic) => {
    axios.get(`/everything?q=${topic}&from=2021-03-28&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`)
    .then(response => {
        // this.setState({post:response.data.articles})
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
    });
} 

export default getArticles;