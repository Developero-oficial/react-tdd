import React, {useContext} from 'react'
import Typography from '@material-ui/core/Typography'

import {AuthContext} from '../../../utils/contexts/auth-context'
import {UserLayout} from '../../../utils/components/user-layout'

export const AdminPage = () => {
  const {user} = useContext(AuthContext)

  return (
    <UserLayout user={user}>
      <Typography component="h1" variant="h5">
        Admin page
      </Typography>
    </UserLayout>
  )
}

export default {AdminPage}
