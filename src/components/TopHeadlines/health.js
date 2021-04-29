import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Health extends Component{


  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("health");
  };

  render()
  {
    return(
       
        <form onSubmit={this.handleSubmit}>
       <Button className="topHeadlines"  color="primary" type="submit" >Health</Button>
      </form>
      

  );
  }
    
}
export default Health;