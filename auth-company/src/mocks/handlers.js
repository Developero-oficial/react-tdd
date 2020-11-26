import {rest} from 'msw'

import {
  HTTP_INVALID_CREDENTIALS_STATUS,
  HTTP_OK_STATUS,
  ADMIN_ROLE,
  EMPLOYEE_ROLE,
} from '../consts'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', true)
    let role = ''

    const {email} = req.body

    if (email === 'admin@mail.com') {
      role = ADMIN_ROLE
    }

    if (email === 'employee@mail.com') {
      role = EMPLOYEE_ROLE
    }

    return res(ctx.status(200), ctx.json({user: {role, username: 'John Doe'}}))
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
