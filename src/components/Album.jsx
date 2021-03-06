import React, { Component } from 'react';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreInfo: false
    }

    this.moreInfoClick = this.moreInfoClick.bind(this);
  }

  moreInfoClick() {
    this.setState((prevState) => ({showMoreInfo: !prevState.showMoreInfo}));
  }
  render() {
    const {id, title, link: {attributes: {href}}, 'im:image': images, 'im:price': {label: price}, 'im:itemCount': {label: tracksNumber}} = this.props;
    const {showMoreInfo} = this.state;
    const [song, artist] = title.label.split('-');
    return <li key={id} className="column is-6 album">
        <div className="card">
         
            <div className="media is-marginless">
              <div className="media-left is-marginless">
                <figure className="image is-128x128">
                  <img src={images[2].label} alt={title} />
                </figure>
              </div>
              {!showMoreInfo ? <div className="media-content column is-paddingless album-title info">
                  <h2 className="title is-5">{song}</h2>
                  <h3 className="subtitle is-6">{artist}</h3>
                </div> : <div className="media-content columns is-marginless more-info ">
                  <div className="column is-half is-paddingless">
                    <h3 className="title is-4 is-marginless">Tracks</h3>
                    <span className="subtitle is-5">{tracksNumber}</span>
                  </div>
                  <div className="column is-half more-info-item is-paddingless">
                    <h3 className="title is-4 is-marginless">Price</h3>
                    <span className="subtitle is-5">{price}</span>
                  </div>
                </div>}
            </div>

          <div className="columns is-marginless is-mobile">
            <button className="button column is-6 is-primary is-radiusless is-paddingless" onClick={this.moreInfoClick}>
              More info
            </button>
             <a href={href} className='column is-6 is-paddingless'> 
              <button className="button is-primary is-radiusless is-paddingless is-marginless is-fullwidth">
                Itunes 
              </button>
            </a>
          </div>
        </div>
      </li>;
  }
}

export default Album;
