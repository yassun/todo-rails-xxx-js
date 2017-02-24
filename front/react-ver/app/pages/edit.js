import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import TodoForm   from '../components/todo-form'

export default class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: {}}
  }
  componentDidMount() {
    this.getTodo(this.props.params.id)
  }
  componentWillReceiveProps(nextProps) {
    this.getTodo(nextProps.params.id)
  }
  getTodo(id) {
    axios.get("/" + `todos/${id}`).then((response) => {
      this.setState({todo: response.data})
    }).catch((response) => {
      console.log(response)
    })
  }
  update() {
    axios.put("/" + `todos/${this.props.params.id}`,
            this.state.todo).then((response) => {
      this.props.router.push("/")
    }).catch((response) => {
      console.log(response)
    })
  }
  delete(){
    axios.delete("/" + `todos/${this.props.params.id}`).then(() => {
      this.props.router.push("/")
    }).catch((response) => {
      console.log(response)
    })
  }
  formChange(todo) {
    this.setState({todo: todo})
  }
  render() {
    var addBtnClassNames = [
      'btn-floating','waves-effect',
      'waves-light','green'
    ].join(' ');

    var delBtnClassNames = [
      'btn-floating', 'waves-effect',
      'waves-light', 'red'
    ].join(' ');

    return(
      <div className="container">
        <div className="row">
          <TodoForm todo={this.state.todo} onChange={this.formChange.bind(this)} >
            <span>
              <a onClick={this.update.bind(this)} className={addBtnClassNames}>
                <i className="material-icons">note_add</i>
              </a>
            </span>
            <span>
              <a onClick={this.delete.bind(this)} className={delBtnClassNames}>
                <i className="material-icons">delete</i>
              </a>
            </span>
          </TodoForm>
        </div>
      </div>
    )
  }
}
EditPage.propTypes = {
  params: PropTypes.object,
  history: PropTypes.object
}
