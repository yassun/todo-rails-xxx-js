import React, { Component } from 'react'
import axios from 'axios'
import Todo from './todo'

export default class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
  }
  componentDidMount() {
    axios.get('/todos').then((response) => {
      this.setState({todos: response.data})
    }).catch((response) => {
      console.log(response)
    })
  }
  render() {
    return (
      <ul>
        {this.state.todos.map(todo =>
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

