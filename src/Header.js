import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/utapi-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="top_header">
        <header>
          <NavLink exact to="/" className="home">
            <img src={logo} alt="Utapi" />
          </NavLink>
          <p>API for tracking resource utilization and reporting metrics</p>
        </header>
        <div className="main_nav">
          <nav>
            <NavLink exact to="/" className="home">
              Home
            </NavLink>
            <NavLink to="/bucket" className="bucket">
              Bucket
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

/*
<NavLink to="/users" className="user">
              Users
            </NavLink>
*/

export default Header;
