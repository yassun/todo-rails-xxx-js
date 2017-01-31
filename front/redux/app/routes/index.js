import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Edit from '../containers/Edit';

const routes = (
  <Route path="/" component={App} >
    <Route path="edit" component={Edit}/>
    <Route path="new" component={App} />
    <Route path="*" component={App} />
  </Route>
)

export default routes
