import React, { Component } from 'react'

class Template extends Component {
  debugger;
  render() {
    return (
      <div key={this.props.title} className='container'>
        <div className={'col-xs-8 col-sm-offset-1 col-sm-6 col-md-offset-1 col-md-5 ' + this.props.animationClasses}>
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
