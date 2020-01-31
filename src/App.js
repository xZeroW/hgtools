import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import Stats from './components/tools/Stats'
import Tree from './components/tools/Tree'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/stats' component={Stats} />
            <Route path='/tree' component={Tree} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;