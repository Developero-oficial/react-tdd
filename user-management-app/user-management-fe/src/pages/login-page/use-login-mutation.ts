import axios from 'axios'
import {useMutation} from 'react-query'

import {Inputs} from './login-page.interfaces'

const loginService = async (email: string, password: string): Promise<void> =>
  axios.post('/login', {
    email,
    password,
  })

export const useLoginMutation = () =>
  useMutation((payload: Inputs) =>
    loginService(payload.email, payload.password),
  )
