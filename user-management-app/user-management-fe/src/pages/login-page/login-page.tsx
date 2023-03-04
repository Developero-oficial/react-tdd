import React from 'react'
import {Typography, TextField, Button} from '@mui/material'
import {useForm, SubmitHandler} from 'react-hook-form'

interface Inputs {
  email: string
  password: string
}

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <>
      <Typography component="h1">Login</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          {...register('email', {required: true})}
          helperText={errors.email && 'The email is required'}
        />

        <TextField
          label="Password"
          type="password"
          {...register('password', {required: true})}
          helperText={errors.password && 'The password is required'}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
