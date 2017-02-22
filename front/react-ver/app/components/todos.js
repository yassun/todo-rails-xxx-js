import React, { Component } from 'react'
import axios from 'axios'
import Todo from './todo'
import styles from '../css/todos.css'

export default class Todos extends React.Component {
  render() {
    var todosClassNames = [
      styles.todos,
      'row'
    ].join(' ');

    return (
      <div className={todosClassNames}>
        {this.props.todos.map(todo =>
           <Todo key = { todo.id } todo = { todo }/>
        )}
      </div>
    );
  }
}

