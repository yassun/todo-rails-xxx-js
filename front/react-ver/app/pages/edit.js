import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import TodoForm   from '../components/todoForm'

export default class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: []}
  }
  componentDidMount() {
    this.getTodo(this.props.params.id)
  }
  componentWillReceiveProps(nextProps) {
    this.getTodo(nextProps.params.id)
  }
  getTodo(id) {
    axios.get("http://localhost:3000/" + `todos/${id}`).then((response) => {
      this.setState({todo: response.data})
    }).catch((response) => {
      console.log(response)
    })
  }
  update() {
    axios.put("http://localhost:3000/" + `/todos/${this.props.params.id}`,
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
        <h2>Update</h2>
        <TodoForm todo={this.state.todo} onChange={this.formChange.bind(this)} onSubmit={this.update.bind(this)} />
        <Link to="/">Back</Link>
      </div>
    )
  }
}
NewPage.propTypes = {
  params: PropTypes.object,
  history: PropTypes.object
}
