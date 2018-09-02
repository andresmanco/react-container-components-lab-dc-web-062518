import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
  state = {
    searchTerm: '',
    reviews: []
  }

  url = ()=>{
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='${this.state.searchTerm}'`
          + `api-key=${NYT_API_KEY}`;
  }

  onSubmit = (e)=>{
    e.preventDefault()
    fetch(this.url())
    .then(r=> r.json())
    .then(latestMovies=>{
      this.setState({reviews: latestMovies.results})
    })
    //Inside of the debugger i can't get to any state or function????
    debugger
  }

  onChange = (e)=>{
    debugger
    this.setState({searchTerm: e.target.value})
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
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.onSubmit}>
          <label>Search movie</label>
          <input type="text" value={this.state.searchTerm} onChange={e=> this.onChange(e)} />
          <input type="submit" />
        </form>
        {this.renderReviews()}
      </div>
    )
  }
}
