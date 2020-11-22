import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {LoginPage} from './auth/components/login-page'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
