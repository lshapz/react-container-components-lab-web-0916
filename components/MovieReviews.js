const React = require('react');

const renderReview = ({
  headline,
  byline,
  link
}) => {
  return (
    <li key={headline} className="review">

        <a className="review-link" href={link.url}>
          {headline}
        </a> by <span className="author">{byline}</span>
    </li>
  );
};

const MovieReviews = ({reviews}) =>{

return (
    <div className="review-list">
       <ul className="review">
        {reviews.map(renderReview)}
       </ul>
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
// <ul> {reviews.forEach(review=>{<li>{review.display_title} by {review.byline}</li>})}</ul>