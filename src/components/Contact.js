import React, { Component } from 'react'
import Template from './Template.js'
import HtmlToReact from 'html-to-react'
import projects from '../markdown/contact.md'

class Contact extends Component {
  render() {
    const parser = new HtmlToReact.Parser(React);
    const content = parser.parse("<div>" + projects + "</div>");
    return (
      <Template title='Contact me'>
        {content}
      </Template>
    )
  }
}

export default Contact;
