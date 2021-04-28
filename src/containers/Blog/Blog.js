import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import axios from '../../axios';
import { CardColumns } from 'reactstrap';

class Blog extends Component {

    state = {
        post: []
    }

    componentDidMount(){
        axios.get("/top-headlines?country=in&apiKey=7fa0d4d9fc1043b5b0f9749f4f57dbc1")
        .then(response => {
            this.setState({post:response.data.articles})
        })
        .catch(error => {
            console.log(error);
        });
    }


    render () {
        
        return (
            
            <CardColumns>
            {this.state.post.map(post => 
            <Post title={post.title} content={post.content} src={post.urlToImage} key={post.index} url={post.url}/>
            )}
            </CardColumns>
            )
        }

}

export default Blog;