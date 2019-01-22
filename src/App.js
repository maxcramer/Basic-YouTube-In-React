import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import './App.css';
const API_KEY = 'AIzaSyAbBRo6FhtIQeIJq0wngsI-xKa4RhgQupc';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };
    console.log(this);

    this.videoSearch('React Tutorials');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
