import React from 'react';
import { connect } from "react-redux";
import Todo from './todo'
import { getTodosAsync } from "../actions";

class Todos extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTodosAsync());
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key = {todo.id}
            title = { todo.title }
            description = { todo.description }
           />
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(Todos);
