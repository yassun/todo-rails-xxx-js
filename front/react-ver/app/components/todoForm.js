import React, { Component, PropTypes } from 'react'

export default class TodoForm extends Component {
  componentDidMount() {
    console.log(this.props.todo.title)
  }
  componentWillReceiveProps() {
    console.log(this.props.todo.title)
  }
  change() {
    this.props.onChange({title: this.refs.title.value, description: this.refs.description.value})
  }
  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }
  onDelete(event){
    event.preventDefault()
    this.props.onDelete(this.props.todo.id)
  }
  render() {
    return(
        <form>
          <div className="field">
            <label htmlFor="todo_title">Title</label><br/>
            <input type="text" ref="title" id="todo_title" value={this.props.todo.title} onChange={this.change.bind(this)} />
          </div>
          <div className="field">
            <label htmlFor="todo_description">Description</label><br/>
            <input type="text" ref="description" id="todo_description" value={this.props.todo.description} onChange={this.change.bind(this)} />
          </div>
          <div className="actions">
            <button onClick={this.onSubmit.bind(this)}> 登録 </button>
            <button onClick={this.onDelete.bind(this)}> 削除 </button>
          </div>
        </form>
    )
  }
}
TodoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
  onDelete: PropTypes.func
}
