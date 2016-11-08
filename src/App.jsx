import React, { Component } from 'react';

import profilePic from './profile.jpg';
import './App.css'
import 'animate.css/animate.css'

class App extends Component {
  render() {
    const backgroundImage = {
      backgroundImage: 'url(' + profilePic + ')',
      backgroundPosition: '60% 70%'
    };
    return (
      <div className='profile-container animated fadeIn' style={backgroundImage}>
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
