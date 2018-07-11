import React, { Component } from 'react';
import Album from './Album';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: null, error: null, isLoaded: false, suggestions: []};

    this.fetchAlbums = this.fetchAlbums.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderList = this.renderList.bind(this); 
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
        if (error) {
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
      });
  }

  getSuggestions(value) {
    return this.state.albums
      .filter(album => album.title.label.toLowerCase().search(value) !== -1);
  };

  onChange(e) {
    this.setState({suggestions: this.getSuggestions(e.target.value)});
  }

  renderList(list) {
    return list.map(album => <Album {...album} />)
  }

  render() {
    const { error, isLoaded, albums, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for a title',
      onChange: this.onChange,
      className:'input is-primary column is-two-thirds',
      type:'text'
    };

    if (error) return <div className="has-text-centered">Error: {error}</div>;
    if (!isLoaded) return <div className="has-text-centered">Loading...</div>;
    return (
      <div>
        <div className='columns is-centered'>
          <input {...inputProps}/>
        </div>
        <ul className="columns is-multiline">
          {suggestions.length > 0 ? this.renderList(suggestions) : this.renderList(albums)}
        </ul>
      </div>
    );
  }
}

export default AlbumList;
