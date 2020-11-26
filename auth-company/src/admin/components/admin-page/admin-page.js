import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import {AuthContext} from '../../../utils/contexts/auth-context'

export const AdminPage = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{user.username}</Typography>
        </Toolbar>
      </AppBar>

      <Typography component="h1" variant="h5">
        Admin page
      </Typography>
    </>
  )
}

export default {AdminPage}
