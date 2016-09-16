import React, { Component, PropTypes } from 'react';
import Chips from 'react-chips';

export default class Home extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Greg Chamberlain</h1>
        <Chips suggestions={['Ruby', 'Java', 'JavaScript', 'Go']} />
      </div>
    );
  }
}
