import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import useTheme from './components/layout/useTheme';

import Dashboard from 'components/dashboard/Dashboard';
import Stats from 'components/tools/Stats';
import Tree from 'components/tools/tree/Tree';
import Register from 'components/register/Register';
import Login from 'components/login/Login';
import BuildList from 'components/builds/BuildList';
import BuildCreate from 'components/builds/BuildCreate';
import PrivateRoute from '_components/PrivateRoute';
import BuildDetail from 'components/builds/BuildDetail';
import Ceditor from 'components/ceditor/ceditor';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#222' : '#FFF'};
    color: ${props => 
    props.theme.mode === 'dark' ? '#FFF' : '#222'};
  }

  header nav {
    background-color: ${props =>
    props.theme.mode === 'dark' ? '#1c2331' : '#4285f4'};
  }
`;

export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/stats' component={Stats} />
          <Route path='/tree' component={Tree} />
          <Route path='/ceditor' component={Ceditor} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route exact path='/builds' component={BuildList} />
          <PrivateRoute path='/builds/create' component={BuildCreate} />
          <Route exact path='/builds/:buildId' component={BuildDetail} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}