import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/**<!-- Add a TrackList component -->*/}
        <TrackList searchResults={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
