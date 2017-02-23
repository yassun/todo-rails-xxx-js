import React, { Component ,PropTypes } from 'react'
import { Link } from 'react-router'
import styles from '../css/todo.css'

export default class Todo extends Component {
  render() {
    var todoClassNames = [
      'col','s12','m6','l3'
    ].join(' ');

    var cardClassNames = [
      styles.todo,
      'card',
      'hoverable'
    ].join(' ');

    var titleClassNames = [
      styles.todoTitle,
      'black-text'
    ].join(' ');

    var descriptionClassNames = [
        styles.todoDescription, 
        'grey-text'
    ].join(' ');

    return (
      <Link to={`/todos/${this.props.todo.id}`}>
        <div className={todoClassNames}>
          <div className={cardClassNames}>
            <div className="card-content">
              <span className={titleClassNames}>{this.props.todo.title}</span>
              <p className={descriptionClassNames}>{this.props.todo.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
Todo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

