import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './top.css';
class Science extends Component{


  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopicWithoutDate("Science");
  };

  render()
  {
    return(
       
        <form onSubmit={this.handleSubmit}>
       <Button className="topHeadlines"  color="primary" type="submit" >Science</Button>
      </form>
      

  );
  }
    
}
export default Science;