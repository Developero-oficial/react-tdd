import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import {LoginPage} from './auth/components/login-page'
import {PrivateRoute} from './utils/components/private-route'
import {AdminPage} from './admin/components/admin-page'
import {EmployeePage} from './employee/components/employee-page'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminPage />
        </PrivateRoute>
        <PrivateRoute path="/employee">
          <EmployeePage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default {
  AppRouter,
}
