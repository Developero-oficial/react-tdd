import React from 'react'
import {Typography, TextField, Button} from '@mui/material'

export function LoginPage() {
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElement = event.currentTarget

    const formElements = formElement.elements as typeof formElement.elements & {
      email: {value: string}
      password: {value: string}
    }

    const {email, password} = formElements

    if (!email.value) {
      setEmailErrorMsg('The email is required')
    }

    if (!password.value) {
      setPasswordErrorMsg('The password is required')
    }
  }

  return (
    <>
      <Typography component="h1">Login</Typography>

      <form onSubmit={handleSubmit}>
        <TextField name="email" label="Email" helperText={emailErrorMsg} />

        <TextField
          name="password"
          label="Password"
          type="password"
          helperText={passwordErrorMsg}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
