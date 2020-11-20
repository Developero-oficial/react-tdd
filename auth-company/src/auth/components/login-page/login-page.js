import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const LoginPage = () => (
  <>
    <h1>Login Page</h1>
    <TextField label="email" id="email" />
    <TextField label="password" id="password" type="password" />
    <Button>Send</Button>
  </>
)

export default {LoginPage}
