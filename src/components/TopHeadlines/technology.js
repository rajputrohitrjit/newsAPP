import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Technology extends Component{


  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("technology");
  };

  render()
  {
    return(
       
        <form onSubmit={this.handleSubmit}>
       <Button className="topHeadlines" color="primary" type="submit" >Technology</Button>
      </form>
      

  );
  }
    
}
export default Technology;