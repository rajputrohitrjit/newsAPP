import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import axios from '../../axios';
import { CardColumns, Spinner} from 'reactstrap';
import {NEWS_API_KEY} from '../../config';
import Search from '../../components/Search/Search';
import Business from '../../components/TopHeadlines/business';
import Entertainment from '../../components/TopHeadlines/entertainment';
import Health from '../../components/TopHeadlines/health';
import Science from '../../components/TopHeadlines/science';
import Sports from '../../components/TopHeadlines/sports';
import Technology from '../../components/TopHeadlines/technology';



class Blog extends Component {

    state = {
        post: [],
        searchTopic: null,
        loading : false,
        totalResults : 0
    }
        componentDidMount(){
            try{
            axios.get(`/top-headlines?country=in&apiKey=${NEWS_API_KEY}`)
            .then(response => {
                this.setState({post:response.data.articles, totalResults:response.data.totalResults})
            })
            .catch(error => {
                console.log(error);
            });          
                        
            }
            catch{

            }
    }

    searchForTopic = (topic,date) => {
        try {
            this.setState({loading:true});
           axios.get(`/everything?q=${topic}&from=${date}&sortBy=publishedAt&pageSize=25&language=en&apiKey=${NEWS_API_KEY}`)
          .then(response => {
              this.setState({post:response.data.articles,totalResults:response.data.totalResults});
            //   console.log(date);
          })
          .catch(error => {
              console.log(error);
          });   
        } catch (error) {
          console.log(error);
        }
        this.setState({totalResults:0});
      };

      searchForTopicWithoutDate = (topic) => {
 
           axios.get(`/top-headlines?category=${topic}&language=en&country=in&apiKey=${NEWS_API_KEY}`)
          .then(response => {
              this.setState({post:response.data.articles,totalResults:response.data.totalResults});
          })
          .catch(error => {
              console.log(error);
          });   
          this.setState({totalResults:0});
      };

    render () {

     
        const fullLoaded =( <CardColumns style={{padding:'50px', paddingTop:'0px'}}>
        {this.state.post.map( (post,index) => 
        <Post title={post.title} content={post.content} src={post.urlToImage} key={index} url={post.url}/>
        )}
        </CardColumns> );

        return (
            <React.Fragment>
            <Search searchForTopic={this.searchForTopic}/>
{/* 
            { this.state.totalResults  ?  <h4 className="text-center">
            Found {this.state.totalResults} articles on this topic</h4>:null} */}

            <div className="row"  
            style={{margin:'auto', width:'50%', padding:'20px'}}>
            <Business searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            <Entertainment searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            <Health searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            <Science searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            <Sports searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            <Technology searchForTopicWithoutDate={this.searchForTopicWithoutDate}/>
            </div>
                
             {this.state.totalResults ? fullLoaded : 
             <Spinner  color="success" 
             style={{marginLeft:'auto', marginRight:'auto', display:'block', width: '3rem', height: '3rem' }}>
                </Spinner>
            }
            
            
            </React.Fragment>
            )
        }

}

export default Blog;