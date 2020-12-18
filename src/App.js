// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';

// components
import Playlist from './components/Playlist'

//data
import playlist from './data';
console.log(playlist)

// ===================
// COMPONENT
// ===================
class App extends Component {
  constructor() {
    super()
    this.state = {
      playlist: playlist,
      title: '',
      artist: '',
      time: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // handles input change
  handleChange(e) {
    this.setState ( { [e.target.id] : e.target.value} )
  }

  // handles submit of form
  handleSubmit(e) {
    e.preventDefault()
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time,
    }
    const newSongArray = [newSong, ...this.state.playlist.songs]
    // set the state  with the newSongArray and resetting the title/artist/time values back to empty strings to clear the inputs
    this.setState({
      playlist: {
        created: this.state.playlist.created,
        title: this.state.playlist.title,
        songs: newSongArray
      },
      title: '',
      artist: '',
      time: ''
    })
  }

  // render
  render() {
    return (
      <div className='tunr-container'>
        <header>
          <Playlist playlist={this.state.playlist}/>
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>title</label>
          <input type='text' value={this.state.title} onChange={this.handleChange} id='title' />
          <label htmlFor='artist'>artist</label>
          <input type='text' value={this.state.artist} onChange={this.handleChange} id='artist' />
          <label htmlFor='time'>time</label>
          <input type='text' value={this.state.time} onChange={this.handleChange} id='time' />
          <input type='submit' value='add new song' />
        </form>
      </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default App;