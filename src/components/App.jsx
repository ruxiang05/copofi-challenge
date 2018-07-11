import React, { Component } from 'react';
import AlbumList from './AlbumList';

class App extends Component {
  render() {
    return <div className="columns is-centered">
      <div className="column is-two-thirds">
          <h1 className="title has-text-centered">iTunes: Top 100 Albums</h1>
          <AlbumList />
        </div>
      </div>;
  }
}

export default App;
