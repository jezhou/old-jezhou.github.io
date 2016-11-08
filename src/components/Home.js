import React, { Component } from 'react'
import { Link } from 'react-router';
import Template from './Template.js';

import githubImg from '../icons/github.svg'
import messengerImg from '../icons/messenger.svg'
import twitterImg from '../icons/twitter.svg'

class Home extends Component {
  render() {
    return (
      <Template title='Jesse Zhou'>
        <div className="nav">
          <p><Link to="/who">About me</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><a href="http://blog.jezhou.com">Blog</a></p>
        </div>
        <div className="icons">
          <a href="https://github.com/jezhou">
            <img alt="github logo" src={githubImg}></img>
          </a>
          <a href="https://m.me/zhoujesse">
            <img alt="fb messenger logo" src={messengerImg}></img>
          </a>
          <a href="https://twitter.com/_jezhou">
            <img alt="twitter logo" src={twitterImg}></img>
          </a>
        </div>
      </Template>
    )
  }
}

export default Home;
