import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Entertainment extends Component{


  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("entertainment");
  };

  render()
  {
    return(
       
        <form onSubmit={this.handleSubmit}>
       <Button className="topHeadlines"  color="primary" type="submit" >Entertainment</Button>
      </form>
      

  );
  }
    
}
export default Entertainment;