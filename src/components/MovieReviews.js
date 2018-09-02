// Code MovieReviews Here
import React from 'react'

const MovieReviews = (reviews)=>{

  const showAll= ({reviews})=>{

    return reviews.map(review=>{
      return <div key={review.display_title} className= 'review'><p> {review.display_title} </p></div>
    })
  }
  return (

    <div className= 'review-list'>
      {showAll(reviews)}
    </div>
  )
}

export default MovieReviews
