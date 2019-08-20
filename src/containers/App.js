/* eslint-disable import/no-named-as-default */
import '@babel/polyfill';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Signup from './signupContainer';
import Login from './loginView';
import Profile from '../components/Profile';
import '../assets/css/style.scss';
import '../assets/scss/main.scss';
import Home from '../components/Home';
// import Login from './Login';
// import PageNotFound from '../components/PageNotFound';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route exact path="/profile" render={(props) => <Profile {...props} />} />
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;