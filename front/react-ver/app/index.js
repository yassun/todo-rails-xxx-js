import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/todos'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h2>List of Todos</h2>
        <Todos />
      </div>
    )
  }
}

ReactDOM.render(
  <IndexPage />,
  document.getElementById('app')
)
