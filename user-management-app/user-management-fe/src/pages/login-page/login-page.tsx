import React from 'react'
import {Typography, TextField, Button} from '@mui/material'
import {useForm, SubmitHandler} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'

import {StyledLoadder} from 'components/loader'
import {loginSchema} from './login-schema'
import {Inputs} from './login-page.interfaces'
import {useLoginMutation} from './use-login-mutation'

export function LoginPage() {
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const mutation = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    mutation.mutate(
      {email, password},
      {
        onError: error => {
          let internalErrorMessage = 'Unexpected error, please try again'

          if (axios.isAxiosError(error) && error?.response?.status === 401) {
            internalErrorMessage = 'The email or password are not correct'
          }

          setErrorMessage(internalErrorMessage)
        },
      },
    )
  }

  return (
    <>
      <Typography component="h1">Login</Typography>

      {mutation.isLoading && (
        <StyledLoadder role="progressbar" aria-label="loading" />
      )}

      {mutation.isError ? <Typography>{errorMessage}</Typography> : null}

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
