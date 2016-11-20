const React = require('react');
import 'whatwg-fetch'
const MovieReviews = require('./MovieReviews'); 

const NYT_API_KEY = 'd9b15d7d1e944041b0b1b05b96bf4791';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component { 

constructor(){
  super()
  this.state = {
    reviews: []
  }
}
componentWillMount(){
  var that = this
  fetch(URL)
      .then(function(res){ //debugger 
        return res.json()})
      .then(function(response){ 
        return that.setState({ reviews: response.results })})
  }
render(){

  return(
    <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
    </div>
    )
}


}


module.exports = LatestMovieReviewsContainer;