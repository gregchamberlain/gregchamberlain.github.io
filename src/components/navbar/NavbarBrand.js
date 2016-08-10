import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavbarBrand = (props) => (
  <div style={style}>
    <Link to={props.href} style={{color: "#ccc"}}>{props.children}</Link>
  </div>
);

NavbarBrand.propTypes = {
  href: PropTypes.string.isRequired
};

const style = {
  height: 56,
  padding: "15px 15px",
  float: "left",
  fontSize: 18,
  color: "#ccc",
};
export default NavbarBrand;
