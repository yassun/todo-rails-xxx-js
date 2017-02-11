import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class IndexPage extends Component {
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
      <div>
        <h2>List of Todos</h2>
        {this.state.todos.map((todo) => <div key = {todo.id}>{todo.title} : {todo.description}</div>)}
      </div>
    )
  }
}

ReactDOM.render(
  <IndexPage />,
  document.getElementById('app')
)
