import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';

const routes = (
  <Route path="/" component={App} >
    <Route path="edit" component={App}/>
    <Route path="new" component={App} />
    <Route path="*" component={App} />
  </Route>
)

export default routes
