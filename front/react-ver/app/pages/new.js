import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import TodoForm   from '../components/todoForm'

export default class NewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: {}}
  }
  create() {
    axios.post('http://localhost:3000/todos',
              {todo: this.state.todo}).then((response) => {
      this.props.history.push("/")
    }).catch((response) => {
      console.log(response)
    })
  }
  formChange(todo) {
    this.setState({todo: todo})
  }
  render() {
    return(
      <div>
        <h2>New</h2>
        <TodoForm todo={this.state.todo} onChange={this.formChange.bind(this)} onSubmit={this.create.bind(this)} />
        <Link to="/">Back</Link>
      </div>
    )
  }
}
NewPage.propTypes = {
  params: PropTypes.object,
  history: PropTypes.object
}
