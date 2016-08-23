import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Toolbar, ToolbarGroup, ToolbarItem } from 'react-responsive-toolbar';

import  Dashboard from 'react-icons/lib/fa/dashboard';
import  User from 'react-icons/lib/fa/user';
import  Gear from 'react-icons/lib/fa/cog';
import  Mine from 'react-icons/lib/fa/bomb';


const toolbarItems = [
  <ToolbarItem>Greg Chamberlain</ToolbarItem>,
  <ToolbarGroup float="right">
    <ToolbarItem>About</ToolbarItem>
    <ToolbarItem>Projects</ToolbarItem>
  </ToolbarGroup>
];

const sidebarItems = [
  <SidebarItem leftIcon={<Mine/>} href="https://gregchamberlain.github.io/react-minesweeper">React Minesweeper</SidebarItem>,
  <SidebarItem leftIcon={<Dashboard/>} href="/dashboard">Dashboard</SidebarItem>,
  <SidebarItem leftIcon={<User/>} href="/profile">Profile</SidebarItem>,
  <SidebarItem leftIcon={<Gear/>} href="/settings">Settings</SidebarItem>,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Sidebar content={sidebarItems}
        onCollapse={(collapsed) => this.setState({collapsed})}>
        <Toolbar sidebarIcon={this.state.collapsed} items={toolbarItems} fixed={true}>
          {children}
        </Toolbar>
      </Sidebar>
    );
  }
}

export default connect()(App);
