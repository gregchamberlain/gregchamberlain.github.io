import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import { hashHistory } from 'react-router'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

const reduxRouterMiddleware = syncHistory(hashHistory)

export default function configureStore(initialState) {
  const store =  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, api, reduxRouterMiddleware),
      DevTools.instrument()
    )
  )

  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
