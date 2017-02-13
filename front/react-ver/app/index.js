import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import IndexPage from './pages/index'
import TodoPage  from './pages/todo'

render((
  <Router history={hashHistory}>
    <Route path="/" >
      <IndexRoute component={IndexPage}/>
      <Route path="/todos/:id" component={TodoPage}/>
    </Route>
  </Router>
  ),
  document.getElementById('app')
)

