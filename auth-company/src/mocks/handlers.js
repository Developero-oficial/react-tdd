// eslint-disable-next-line import/no-extraneous-dependencies
import {rest} from 'msw'

import {HTTP_INVALID_CREDENTIALS_STATUS, HTTP_OK_STATUS} from '../consts'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', true)
    return res(ctx.status(200), ctx.json({user: {role: 'admin'}}))
  }),
]

export const handlerInvalidCredentials = ({wrongPassword, wrongEmail}) =>
  rest.post('/login', (req, res, ctx) => {
    const {email, password} = req.body

    if (email === wrongEmail && password === wrongPassword) {
      return res(
        ctx.status(HTTP_INVALID_CREDENTIALS_STATUS),
        ctx.json({message: 'The email or password are not correct'}),
      )
    }

    return res(ctx.status(HTTP_OK_STATUS))
  })

export default {handlers, handlerInvalidCredentials}
