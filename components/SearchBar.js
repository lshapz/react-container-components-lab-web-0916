const React = require('react');

const SearchBar = ({
  handleChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="search-input" onChange={handleChange} />
      <button type="submit" id="search-submit">search</button>
    </form>
  );
};


// SearchBar.propTypes = {
//   handleChange: React.PropTypes.func,
//   handleSubmit: React.PropTypes.fun
// };

module.exports = SearchBar;
