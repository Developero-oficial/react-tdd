import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'

export const UserLayout = ({user, children}) => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{user.username}</Typography>
        <Button component={Link} color="inherit" to="/employee">
          Employee
        </Button>
      </Toolbar>
    </AppBar>
    {children}
  </Container>
)

UserLayout.propTypes = {
  user: PropTypes.shape({username: PropTypes.string.isRequired}).isRequired,
  children: PropTypes.node.isRequired,
}

export default {UserLayout}
