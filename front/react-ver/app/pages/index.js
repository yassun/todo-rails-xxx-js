import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Todos from '../components/todos'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
  }
  componentDidMount() {
    this.getTodos()
  }
  componentWillReceiveProps() {
    this.getTodos()
  }
  getTodos() {
    axios.get('http://localhost:3000/todos').then((response) => {
      this.setState({todos: response.data})
    }).catch((response) => {
      console.log(response)
    })
  }
  render() {
    return(
      <div>
        <h2>List of Todos</h2>
        <Todos todos={this.state.todos}/>
        <br />
        <Link to="/todos/new">New Todo</Link>
      </div>
    )
  }
}
