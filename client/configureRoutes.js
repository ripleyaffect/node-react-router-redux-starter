import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from 'app/components/App'
import AboutPage from 'app/components/AboutPage'
import HomePage from 'app/components/HomePage'

export default () => {
  return <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
}