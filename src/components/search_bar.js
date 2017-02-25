import React, { Component } from 'react';

// Every class based component needs a defined render method
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
