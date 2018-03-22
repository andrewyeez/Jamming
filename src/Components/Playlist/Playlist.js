import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Playlist">
        <input value={"New Playlist"} />
        {/**<!-- Add a TrackList component -->*/}
        <TrackList tracks={this.props.tracks} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
