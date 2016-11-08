import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {this.props.children}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
