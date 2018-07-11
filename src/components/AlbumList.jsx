import React, { Component } from 'react';
import Album from './Album';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null,
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchAlbums(
      'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
    );
  }
  fetchAlbums(url) {
    return fetch(url)
    .then(res => res.json())
    .then((result, error) => {
      if(error) {
        this.setState({
          error,
          isLoaded: true
        });
      } else {
        this.setState({
          albums: result.feed.entry,
          isLoaded: true
        });
      }
    })
  }

  render() {
    const {error, isLoaded, albums} = this.state;

    if(error) return <div className='has-text-centered'>Error: {error}</div>;
    if (!isLoaded) return <div className='has-text-centered'>Loading...</div>
    return <ul className='columns is-multiline'>
      {
        albums.map(album => {
          return <Album {...album}/>
        })
      }
    </ul>;
  }
}

export default AlbumList;
