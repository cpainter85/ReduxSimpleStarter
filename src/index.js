import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { API_KEY } from './api_key';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

//Create a new compenent.
// This compenent should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
      // if key and property have same variable name ie {videos: videos} can shorted to {videos}
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this compenent's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
