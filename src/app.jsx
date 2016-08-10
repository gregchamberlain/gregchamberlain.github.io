import React from 'react';
import { render } from 'react-dom';
import styles from './styles/main.styl';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

render (
  <Root store={store} />,
  document.getElementById('root')
);