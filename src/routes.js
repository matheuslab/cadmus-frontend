import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Challenge from './pages/Challenge';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Challenge} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
