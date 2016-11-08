import React, { Component } from 'react'
import Template from './Template.js'
import HtmlToReact from 'html-to-react'
import projects from '../markdown/about.md'

class Who extends Component {
  render() {
    const parser = new HtmlToReact.Parser(React);
    const content = parser.parse("<div>" + projects + "</div>");
    return (
      <Template title='About me'>
        {content}
      </Template>
    )
  }
}

export default Who;
