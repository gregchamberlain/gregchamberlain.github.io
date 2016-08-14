import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';

const Dashboard = (props) => <div style={{height: 4000}}><h1>Dashboard</h1></div>;
const Profile = (props) => <div><h1>Profile</h1></div>;
const Settings = (props) => <div><h1>Settings</h1></div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="dashboard" component={Dashboard} />
    <Route path="profile" component={Profile} />
    <Route path="settings" component={Settings} />
  </Route>
);
