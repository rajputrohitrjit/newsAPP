import React from 'react';
import './Post.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
const post = (props) => {
    return (
      
      <Card className="article" key={props.key}>
        <CardImg top width="100%" src={props.src}/>
        <CardBody>
          <CardTitle tag="h5" className="Post">
            <a className="Post" href={props.url} target="_blank" rel="noreferrer">
              {props.title}
              </a>
            </CardTitle>
          <CardText>{props.content}</CardText>
        </CardBody>
      </Card>
        
    );
}
   


export default post;