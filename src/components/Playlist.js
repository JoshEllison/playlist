// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';

// ===================
// COMPONENT
// ===================
class Playlist extends Component {
  render() {
    return (
      <div className='playlist'>
        <h1>{this.props.playlist.title}</h1>
        <div className='songs'>
          {this.props.playlist.songs.map((song, index) => {
            return (
              <div className='song' key={index}>
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>
                <h3>{song.time}</h3>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default Playlist;
