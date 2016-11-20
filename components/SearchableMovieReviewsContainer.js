const React = require('react');
import 'whatwg-fetch'
// const { fetch } = require('whatwg-fetch'); for tests

const MovieReviews = require('./MovieReviews'); 
const SearchBar = require('./SearchBar'); 
const NYT_API_KEY = 'd9b15d7d1e944041b0b1b05b96bf4791';
const BASE_URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +  `api-key=${NYT_API_KEY}&query=` 

class SearchableMovieReviewsContainer extends React.Component { 

constructor(){
  super()
  this.state = {reviews: [], searchTerm: ''}
  this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}
handleSubmit(event){
  event.preventDefault();
  var that = this
  var other = BASE_URL.concat(this.state.searchTerm)
  
  fetch(other)
      .then(function(res){ //debugger 
        return res.json()})
      .then(function(response){ 
        return that.setState({ reviews: response.results })})
  }

  handleSearchInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }


render(){

  return(
    <div className="searchable-movie-reviews">
      <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleSearchInputChange} />
      <MovieReviews reviews={this.state.reviews} />
    </div>

    )
}


}

module.exports = SearchableMovieReviewsContainer;
