import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import AddTodo from '../containers/AddTodo';

const routes = (
  <Route>
    <Route path="edit" component={AddTodo}/>
    <Route path="new" component={AddTodo} />
    <Route path="*" component={App} />
  </Route>
)

export default routes
