import React, { Component } from 'react'
import Todo from './todo'

export default class Todos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key = {todo.id}
            title = { todo.title }
            description = { todo.description }
           />
        )}
      </ul>
    );
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
