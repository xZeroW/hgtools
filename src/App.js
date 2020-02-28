import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Navbar from 'components/layout/Navbar';
import Dashboard from 'components/dashboard/Dashboard';
import Stats from 'components/tools/Stats';
import Tree from 'components/tools/Tree';
import Register from 'components/register/register';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/stats' component={Stats} />
        <Route path='/tree' component={Tree} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;