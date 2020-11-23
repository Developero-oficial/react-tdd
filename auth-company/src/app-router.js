import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route, Redirect} from 'react-router-dom'

import {LoginPage} from './auth/components/login-page'

const AdminPage = () => <h1>Admin page</h1>

const EmployeePage = () => <h1>Admin page</h1>

const isAuth = false

const PrivateRoute = ({children, path}) => (
  <Route path={path} exact>
    {isAuth ? {children} : <Redirect to="/" />}
  </Route>
)

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export const AppRouter = () => (
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
)

export default {
  AppRouter,
}
