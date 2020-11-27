import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {AuthContext} from '../contexts/auth-context'

export const AuthGuard = ({children, isAuth, role}) => {
  const [isUserAuth, setIsUserAuth] = useState(isAuth)
  const [user, setUser] = useState({role, username: ''})

  const handleSuccessLogin = ({role, username}) => {
    setUser({role, username})
    setIsUserAuth(true)
  }

  const authProviderValue = {
    isAuth: isUserAuth,
    handleSuccessLogin,
    user,
  }

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  )
}

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool,
  role: PropTypes.string,
}

AuthGuard.defaultProps = {
  isAuth: false,
  role: '',
}

export default {AuthGuard}
