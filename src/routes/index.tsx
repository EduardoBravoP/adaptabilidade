import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Content from '../pages/Content';
import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Landing} /> 
    <Route exact path='/content' component={Content} /> 
  </Switch>
);

export default Routes;