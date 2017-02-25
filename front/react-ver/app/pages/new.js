import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import TodoForm   from '../components/todo-form'

export default class NewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: {}}
  }
  create() {
    axios.post('http://localhost:3000/todos',
              this.state.todo).then((response) => {
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
          <TodoForm todo={this.state.todo} onChange={this.formChange.bind(this)}>
            <span>
              <a onClick={this.create.bind(this)} className={addBtnClassNames}>
                <i className="material-icons">note_add</i>
              </a>
            </span>
            <span>
              <Link to="/" className={delBtnClassNames}>
                <i className="material-icons">delete</i>
              </Link>
            </span>
          </TodoForm>
        </div>
      </div>
    )
  }
}
NewPage.propTypes = {
  params: PropTypes.object,
  history: PropTypes.object
}
