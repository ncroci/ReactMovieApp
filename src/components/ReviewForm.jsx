import React from 'react';
import Review from './Review';


export default class ReviewForm extends React.Component{
	state = {
	  review: '',
	  reviews: []
	};
  
	saveInput = (e) => {
		this.setState({ review: e.target.value });
	};
  
	addNewReview = () => {
	  let { reviews, review } = this.state;
	  reviews.push(review);
	  this.setState({review: review});
	};
  
	render() {
	  return (
		<div>
		  <input
		  	id="reviewInput"
			type="text"
			onChange={this.saveInput}
		  />
		  <button onClick={this.addNewReview}> Add Review </button>
		  <ul>
			  <h2>Reviews:</h2>
			{this.state.reviews.map((subItems, sIndex) => {
			  return <li key={sIndex}> {subItems}</li>
			})}
		  </ul>
		</div>
	  );
	}
  }