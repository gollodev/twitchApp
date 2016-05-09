import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import ListStreamsContainer from './containers/ListStreamsContainer/ListStreamsContainer';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListStreamsContainer} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
