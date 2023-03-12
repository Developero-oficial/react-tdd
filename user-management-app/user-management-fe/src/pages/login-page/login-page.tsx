import React from 'react'
import {Typography, TextField, Button} from '@mui/material'
import {useForm, SubmitHandler} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'

import {loginSchema} from './login-schema'

interface Inputs {
  email: string
  password: string
}

const loginService = async (email: string, password: string) => {
  await axios.post('/login', {
    email,
    password,
  })
}

export function LoginPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    setIsLoading(true)
    await loginService(email, password)
  }

  return (
    <>
      <Typography component="h1">Login</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          {...register('email', {required: true})}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          {...register('password', {required: true})}
          helperText={errors.password?.message}
        />

        <Button disabled={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}
