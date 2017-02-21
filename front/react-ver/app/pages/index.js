import React, { Component } from 'react'
import axios from 'axios'
import AppHeader from '../components/app-header'
import AddTodo from '../components/add-todo'
import Todos from '../components/todos'
import AppFooter from '../components/app-footer'

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
      <div className="container">
        <AppHeader title="Todo Sample" subTitle="Rails5 + ES6 + React + react-router + axios + CSS Modules" />
        <AddTodo />
        <Todos todos={this.state.todos}/>
        <AppFooter />
      </div>
    )
  }
}
