import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Sports extends Component{



  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("Sports");
  };

  render()
  {
    return(
       
        <form onSubmit={this.handleSubmit}>
       <Button className="topHeadlines"  color="primary" type="submit" >Sports</Button>
      </form>
      

  );
  }
    
}
export default Sports;