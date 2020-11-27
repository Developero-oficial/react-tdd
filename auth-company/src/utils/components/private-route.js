import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

import {AuthContext} from '../contexts/auth-context'

export const PrivateRoute = ({children, path, allowRoles}) => {
  const {
    isAuth,
    user: {role},
  } = useContext(AuthContext)

  const getIsAllowed = () => {
    if (allowRoles.length > 0) {
      return allowRoles.includes(role)
    }

    return true
  }

  return (
    <Route path={path} exact>
      {isAuth && getIsAllowed() ? children : <Redirect to="/" />}
    </Route>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  allowRoles: PropTypes.arrayOf(PropTypes.string),
}

PrivateRoute.defaultProps = {
  allowRoles: [],
}

export default {PrivateRoute}
