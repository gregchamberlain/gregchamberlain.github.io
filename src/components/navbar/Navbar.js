import React, { Component, PropTypes } from 'react';

import NavbarBrand from './NavbarBrand';

export default class NavBar extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <div style={styles.navbar}>
          <NavbarBrand href="/">Greg</NavbarBrand>
        </div>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

NavbarBrand.propTypes = {
  bgcolor: PropTypes.string,
};

NavbarBrand.defaultProps = {
  bgcolor: "red",
};

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
