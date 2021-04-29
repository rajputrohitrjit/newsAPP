import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Business extends Component{


  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("business");
  };

  render()
  {
    return(
      
        <form onSubmit={this.handleSubmit}>       
          <Button color="primary" type="submit" 
          className="topHeadlines" >Business</Button>
      </form>
     
      

  );
  }
    
}
export default Business;