import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from '../configureStore'

const Root = () => {
  return <Provider store={configureStore()}>
      <App />
    </Provider>
}

export default Root
