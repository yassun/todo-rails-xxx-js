import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.title}</span><br/>
        <span>{this.props.description}</span><br/>
      </li>
    );
  }
}
