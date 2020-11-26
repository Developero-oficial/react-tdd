import React, {useContext} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import {AuthContext} from '../../../utils/contexts/auth-context'
import {ADMIN_ROLE} from '../../../consts'

export const EmployeePage = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
      <Typography component="h1" variant="h5">
        Employee page
      </Typography>

      {user.role === ADMIN_ROLE && <Button type="button">Delete</Button>}

      <p>{user.username}</p>
    </>
  )
}

export default {EmployeePage}
