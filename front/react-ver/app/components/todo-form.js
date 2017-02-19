import React, { Component, PropTypes } from 'react'

export default class TodoForm extends Component {
  change() {
    this.props.onChange({title: this.refs.title.value, description: this.refs.description.value})
  }
  render() {

    var submitClassNames = [
      'actions','center-align'
    ].join(' ');

    return(
      <form>
        <div className="field">
          <label htmlFor="todo_title">Title</label><br/>
          <input
            type="text"
            ref="title"
            id="todo_title input_text"
            maxLength="100"
            value={this.props.todo.title}
            onChange={this.change.bind(this)} />
        </div>
        <div className="field">
          <label htmlFor="todo_description">Description</label><br/>
          <input
            type="text"
            ref="description"
            id="todo_description"
            maxLength="200"
            value={this.props.todo.description}
            onChange={this.change.bind(this)} />
        </div>
        <div className={submitClassNames}>
          {this.props.children}
        </div>
      </form>
    )
  }
}
TodoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
