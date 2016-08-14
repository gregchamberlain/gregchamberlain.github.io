import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar';
import { Sidebar } from 'react-responsive-sidebar';
import { Toolbar, ToolbarGroup, ToolbarItem } from 'react-responsive-toolbar';

const toolbarItems = [
  <ToolbarItem>Greg Chamberlain</ToolbarItem>,
  <ToolbarGroup float="right">
    <ToolbarItem>About</ToolbarItem>
    <ToolbarItem>Project</ToolbarItem>
  </ToolbarGroup>
];

class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <Sidebar items={[]}>
        <Toolbar sidebarIcon={true} items={toolbarItems}>
          {children}
        </Toolbar>
      </Sidebar>
    );
  }
}

export default connect()(App);
