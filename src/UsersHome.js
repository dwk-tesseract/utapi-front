import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to users list home page</h1>
        <p>Users Home</p>
      </div>
    );
  }
}

export default About;
