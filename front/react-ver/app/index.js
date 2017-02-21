import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from "./components/app";
import IndexPage from './pages/index'
import TodoPage  from './pages/edit'
import NewPage   from './pages/new'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={IndexPage}/>
      <Route path="/todos/new" component={NewPage}/>
      <Route path="/todos/:id" component={TodoPage}/>
    </Route>
  </Router>
  ),
  document.getElementById('app')
)

