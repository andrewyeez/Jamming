import React, { Component } from "react";
import Track from "../Track/Track";
import "./TrackList.css";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showSearchResults = () => {
    return;
  };

  render() {
    return (
      <div className="TrackList">
        {/**<!-- You will add a map method that renders a set of Track components  -->*/}
        {this.props.searchResults !== undefined
          ? this.props.searchResults.map(track => (
              <Track key={track.id} track={track} />
            ))
          : false}
      </div>
    );
  }
}

export default TrackList;
