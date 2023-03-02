import {Typography, TextField, Button} from '@mui/material'

export function LoginPage() {
  return (
    <>
      <Typography component="h1">Login</Typography>

      <TextField label="Email" />

      <TextField label="Password" type="password" />

      <Button>Submit</Button>
    </>
  )
}
