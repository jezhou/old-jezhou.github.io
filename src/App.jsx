import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';


import profilePic from './profile.jpg';
import './App.css'
import 'animate.css/animate.css'

class App extends Component {
  render() {
    const backgroundImage = {
      backgroundImage: 'url(' + profilePic + ')',
      backgroundPosition: '60% 70%'
    };
    console.log("The key is " + this.props.location.pathname)
    return (
      <div className='profile-container animated fadeIn' style={backgroundImage}>
        <div className="page-container">
        <ReactCSSTransitionReplace
          transitionName="roll-up"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionReplace>
        </div>
      </div>
    );
  }
}

export default App;
