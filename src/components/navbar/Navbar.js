import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <div style={styles.navbar}>
        </div>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: "#444",
  },
  content: {
    marginTop: 56,
    height: 1000,
  },
};
