import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>This is my Home</h1>
      </div>
    );
  }
}
