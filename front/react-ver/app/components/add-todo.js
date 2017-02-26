import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from '../css/add-todo.css'

export default class AddTodo extends React.Component {
  render() {
    return (
      <div className="center">
        <Link to="/todos/new" className={styles.addBtton}>Add Todo</Link>
      </div>
    );
  }
}

