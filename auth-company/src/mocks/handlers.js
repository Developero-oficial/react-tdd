// eslint-disable-next-line import/no-extraneous-dependencies
import {rest} from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', true)
    return res(ctx.status(200))
  }),
]

export default {handlers}
