import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {AuthContext} from '../contexts/auth-context'

export const AuthGuard = ({children, isAuth}) => {
  const [isUserAuth, setIsUserAuth] = useState(isAuth)

  const handleSuccessLogin = () => setIsUserAuth(true)

  const authProviderValue = {
    isAuth: isUserAuth,
    handleSuccessLogin,
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
}

AuthGuard.defaultProps = {
  isAuth: false,
}

export default {AuthGuard}
