import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { API_KEY } from './api_key';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { videos:[] };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // equivalent to this.setState({ videos: videos }), only works when key and value variable names are the same
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));