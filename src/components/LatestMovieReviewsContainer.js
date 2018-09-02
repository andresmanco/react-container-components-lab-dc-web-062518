import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
  state = {
    reviews: []
  }

  componentDidMount = ()=>{
    fetch(URL)
    .then(r=> r.json())
    .then(latestMovies=>{
      this.setState({reviews: latestMovies.results})
    })
  }

  renderReviews = ()=>{
    if(this.state.reviews.length > 0){
      return <MovieReviews reviews= {this.state.reviews}/>
    }
    else{
      return null
    }
  }


  render(){
    return(
      <div className='latest-movie-reviews'>
        {this.renderReviews()}
      </div>
    )
  }
}
