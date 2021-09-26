import React from 'react';
import ReviewList from './ReviewList';
import StarRating from './Stars';


export default class Movie extends React.Component{
    constructor(props){
        super(props);
          this.state = {
              name: props.name,
              img: props.img,
              synopsis: props.synopsis,
              rating: props.rating
          }
    }
    
    render(){
        return(
        <div className = 'movieDiv'>
            <div className="titleDiv">
                <h1>{this.state.name}</h1>
                <StarRating />
                <img src={this.state.img}/>
            </div>
            <div className="wordDiv">
                <p>{this.state.synopsis}</p>
                <ReviewList />
            </div>
        </div>
        );
    }
}