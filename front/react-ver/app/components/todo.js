import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li>
        <span>{this.props.title}</span><br/>
        <span>{this.props.description}</span><br/>
      </li>
    );
  }
}

