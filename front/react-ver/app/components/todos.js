import React, { Component } from 'react'
import axios from 'axios'
import Todo from './todo'
import { Link } from 'react-router'

export default class Todos extends React.Component {
  render() {
    return (
      <ul>
          {this.props.todos.map(todo =>
            <Link key = { todo.id } to={`/todos/${todo.id}`}>
              <Todo
                title = { todo.title }
                description = { todo.description }
               />
            </Link>
          )}
      </ul>
    );
  }
}

