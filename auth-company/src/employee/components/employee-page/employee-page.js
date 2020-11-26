import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import {AuthContext} from '../../../utils/contexts/auth-context'
import {ADMIN_ROLE} from '../../../consts'

export const EmployeePage = () => {
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
        Employee page
      </Typography>

      {user.role === ADMIN_ROLE && <Button type="button">Delete</Button>}
    </>
  )
}

export default {EmployeePage}
