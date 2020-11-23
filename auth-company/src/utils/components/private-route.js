import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({children, path, isAuth}) => (
  <Route path={path} exact>
    {isAuth ? children : <Redirect to="/" />}
  </Route>
)

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

export default {PrivateRoute}
