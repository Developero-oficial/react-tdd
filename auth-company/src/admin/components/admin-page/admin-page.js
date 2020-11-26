import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {AuthContext} from '../../../utils/contexts/auth-context'

export const AdminPage = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{user.username}</Typography>
          <Button component={Link} color="inherit" to="/employee">
            Employee
          </Button>
        </Toolbar>
      </AppBar>

      <Typography component="h1" variant="h5">
        Admin page
      </Typography>
    </>
  )
}

export default {AdminPage}
