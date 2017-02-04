import React, { Component } from "react";
import { connect } from "react-redux";


class AddTodo extends Component {
  render() {
    let input;
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
      <button onClick={() => {
        //dispatch(addTodo(input.value));
        console.log("call add todo");
        input.value = '';
        }}>
      Add Todo
      </button>
      </div>
    );
  }
}

export default connect()(AddTodo);
