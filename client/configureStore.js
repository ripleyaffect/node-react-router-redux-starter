import { applyMiddleware, compose, createStore } from 'redux'

import { app } from './reducers'

// Add dev tools in development
const addDevTools = (
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const composeEnhancers = addDevTools ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

console.log(composeEnhancers);

export default () => {
  return createStore(
    app,
    {},
    composeEnhancers(applyMiddleware()) // Add middlewares here
  )
}