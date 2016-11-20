const React = require('react');
import 'whatwg-fetch'
// const { fetch } = require('whatwg-fetch'); for tests

const MovieReviews = require('./MovieReviews'); 
const NYT_API_KEY = 'd9b15d7d1e944041b0b1b05b96bf4791';
const BASE_URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +  `api-key=${NYT_API_KEY}` 

class SearchableMovieReviewsContainer extends React.Component { 

constructor(){
  super()
  this.state = {reviews: []}
}
componentWillMount(){
  var that = this
  fetch(BASE_URL)
      .then(function(res){ //debugger 
        return res.json()})
      .then(function(response){ 
        return that.setState({ reviews: response.results })})
  }
render(){

  return(
    <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
    </div>

    )
}


}

module.exports = SearchableMovieReviewsContainer;
