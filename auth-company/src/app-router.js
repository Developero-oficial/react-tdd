import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route, Redirect} from 'react-router-dom'

import {LoginPage} from './auth/components/login-page'

const AdminPage = () => <h1>Admin page</h1>

const EmployeePage = () => <h1>Admin page</h1>

const PrivateRoute = ({children, path, isAuth}) => (
  <Route path={path} exact>
    {isAuth ? children : <Redirect to="/" />}
  </Route>
)

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

export const AppRouter = ({isAuth}) => (
  <Switch>
    <Route path="/" exact>
      <LoginPage />
    </Route>
    <PrivateRoute path="/admin" isAuth={isAuth}>
      <AdminPage />
    </PrivateRoute>
    <PrivateRoute path="/employee" isAuth={isAuth}>
      <EmployeePage />
    </PrivateRoute>
  </Switch>
)

AppRouter.propTypes = {
  isAuth: PropTypes.bool,
}

AppRouter.defaultProps = {
  isAuth: false,
}

export default {
  AppRouter,
}
