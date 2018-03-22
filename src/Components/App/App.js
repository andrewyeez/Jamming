import React, { Component } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: "playlistName",
      playlistTracks: "playlistTracks",
      searchResults: [
        {
          name: "Andrew Yee",
          artist: "Yeezee",
          album: "06 Till Infinity"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/**<!-- Add a SearchBar component -->*/}
          <div className="App-playlist">
            {/**<!-- Add a SearchResults component --*/}
            <SearchResults searchResults={this.state.searchResults} />
            {/**<!-- Add a Playlist component -->*/}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
