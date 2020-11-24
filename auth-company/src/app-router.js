import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'

import {LoginPage} from './auth/components/login-page'
import {PrivateRoute} from './utils/components/private-route'
import {AdminPage} from './admin/components/admin-page'
import {EmployeePage} from './employee/components/employee-page'

export const AppRouter = ({isAuth}) => {
  const [isUserAuth, setIsUserAuth] = useState(isAuth)

  const handleSuccessLogin = () => setIsUserAuth(true)

  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage onSuccessLogin={handleSuccessLogin} />
      </Route>
      <PrivateRoute path="/admin" isAuth={isUserAuth}>
        <AdminPage />
      </PrivateRoute>
      <PrivateRoute path="/employee" isAuth={isUserAuth}>
        <EmployeePage />
      </PrivateRoute>
    </Switch>
  )
}

AppRouter.propTypes = {
  isAuth: PropTypes.bool,
}

AppRouter.defaultProps = {
  isAuth: false,
}

export default {
  AppRouter,
}
