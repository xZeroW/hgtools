import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from 'components/dashboard/Dashboard';
import Stats from 'components/tools/Stats';
import Tree from 'components/tools/Tree';
import Register from 'components/register/Register';
import Login from 'components/login/Login';
import BuildList from 'components/builds/BuildList';
import BuildCreate from 'components/builds/BuildCreate';
import PrivateRoute from '_components/PrivateRoute';
import BuildDetail from 'components/builds/BuildDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/stats' component={Stats} />
        <Route path='/tree' component={Tree} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/builds' component={BuildList} />
        <PrivateRoute path='/builds/create' component={BuildCreate} />
        <Route exact path='/builds/:buildId' component={BuildDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;