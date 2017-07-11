import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Master</div>
        <div>
          <input placheholder="Search an artist..." />
          <button>button</button>
        </div>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    )
  }
}

export default App
