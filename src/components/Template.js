import React, { Component } from 'react'
import { Link } from 'react-router'

import './page.css'

class Template extends Component {
  render() {
    return (
      <div className='container'>
        <div className={'col-xs-8 col-sm-offset-1 col-sm-6 col-md-offset-1 col-md-5 ' + this.props.animationClasses}>
          {this.props.title !== "Jesse Zhou"  &&
          <div className="back-button-pad">
            <Link className="back-button" to="/">Back</Link>
          </div>}
          <h1>{this.props.title}</h1>
          <div className='divider'></div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Template.propTypes = { title: React.PropTypes.string, animationClasses: React.PropTypes.string }
export default Template;
