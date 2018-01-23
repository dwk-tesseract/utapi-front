import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import UsersHome from './UsersHome.js';
import User from './User.js';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3006/users`)
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="main_content">
        <div className="side_menu">
          {users.map(user => (
            <div key={user.uuid}>
              <NavLink to={'/users/' + user.uuid} className="user">
                {user.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="side_content">
          <ConnectedSwitch>
            <Route exact path="/users" component={UsersHome} />
            <Route path="/users/:name" component={User} />
          </ConnectedSwitch>
        </div>
      </div>
    );
  }
}

const AppRouter = connect(state => ({
  location: state.location
}))(Users);

export default AppRouter;
