import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar'

class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <Navbar>
        {children}
      </Navbar>
    );
  }
}

export default connect()(App);
