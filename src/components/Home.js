import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Greg Chamberlain</h1>
      </div>
    );
  }
}
