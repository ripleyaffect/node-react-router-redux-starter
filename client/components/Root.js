import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'

import configureRoutes from 'app/configureRoutes'
import configureStore from 'app/configureStore'
import App from 'app/components/App'

const Root = () => {
  return <Provider store={configureStore()}>
    <Router history={browserHistory} routes={configureRoutes()} />
  </Provider>
}

export default Root
