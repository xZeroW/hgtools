import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from 'components/dashboard/Dashboard';
import Stats from 'components/tools/Stats';
import Tree from 'components/tools/Tree';
import Register from 'components/register/Register';
import Login from 'components/login/Login';
import Builds from 'components/builds/Builds';
import BuildCreate from 'components/builds/BuildCreate';
import PrivateRoute from '_components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/stats' component={Stats} />
        <Route path='/tree' component={Tree} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/builds' component={Builds} />
        <PrivateRoute path='/builds/create' component={BuildCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;