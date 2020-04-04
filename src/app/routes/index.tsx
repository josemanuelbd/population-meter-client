import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './routes';

const Login = React.lazy((): Promise<{ default: React.FC }> => import('containers/Login'));

export const Routes: React.FC = () => (
  <Router>
    <React.Suspense fallback={ <div>Loading...</div> }>
      <Switch>
        <Route exact={ true } path={ ROUTES.ROOT } component={ Login } />
      </Switch>
    </React.Suspense>
  </Router>
);
