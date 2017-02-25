import React, { Component } from 'react';

// Every class based component needs a defined render method
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  // Event handler
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
