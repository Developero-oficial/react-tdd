import React from 'react'
import {Typography, TextField, Button} from '@mui/material'
import {useForm, SubmitHandler} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import {StyledLoadder} from 'components/loader'
import {loginSchema} from './login-schema'
import {Inputs} from './login-page.interfaces'
import {useLoginMutation} from './use-login-mutation'

export function LoginPage() {
  const mutation = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    mutation.mutate({email, password})
  }

  return (
    <>
      <Typography component="h1">Login</Typography>

      {mutation.isLoading && (
        <StyledLoadder role="progressbar" aria-label="loading" />
      )}

      {mutation.error && (
        <Typography>Unexpected error, please try again</Typography>
      )}

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

        <Button disabled={mutation.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}
