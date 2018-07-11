import React, { Component } from 'react';

class AlbumList extends Component {
  render() {
    const {id, title, link: {attributes: {href}}, 'im:image': images} = this.props;
    const [song, artist] = title.label.split('-');
    
    return <li key={id} className="column is-6">
        <a href={href}>
          <div className="card">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={images[2].label} alt={title} />
                </figure>
              </div>
              <div className="media-content">
                <h2 className="title is-5">{song}</h2>
                <h3 className="subtitle is-6">{artist}</h3>
              </div>
            </div>
          </div>
        </a>
      </li>; 
  }
}

export default AlbumList;
