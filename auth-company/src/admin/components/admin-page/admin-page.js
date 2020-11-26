import React, {useContext} from 'react'

import {AuthContext} from '../../../utils/contexts/auth-context'

export const AdminPage = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <h1>Admin page</h1>
      <p>{user.username}</p>
    </>
  )
}

export default {AdminPage}
