import React from "react";

class Search extends React.Component {
  
  handleSearch = event => {
    const { value } = event.target;
    this.props.filterFood(value);
  };

  render() {
    return (
      <div className="search-input">
        
        <input
          type="text"
          className="input"
          onChange={this.handleSearch} 
          placeholder="search..."
        />
      </div>
    );
  }
}

export default Search;