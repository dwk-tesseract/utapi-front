import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Users from './Users.js';
import Buckets from './Buckets.js';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const AppContainer = () => (
  <div className="main">
    <Header />
    <div className="main_wrapper">
      <ConnectedSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/bucket" component={Buckets} />
      </ConnectedSwitch>
    </div>
    <Footer />
  </div>
);

const AppRouter = connect(state => ({
  location: state.location
}))(AppContainer);

export default AppRouter;
