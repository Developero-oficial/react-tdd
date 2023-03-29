import axios from 'axios'
import {useMutation} from 'react-query'

import {baseUrl} from 'config'
import {Inputs} from './login-page.interfaces'

const loginService = async (email: string, password: string): Promise<void> =>
  axios.post(`${baseUrl}/login`, {
    email,
    password,
  })

export const useLoginMutation = () =>
  useMutation((payload: Inputs) =>
    loginService(payload.email, payload.password),
  )
