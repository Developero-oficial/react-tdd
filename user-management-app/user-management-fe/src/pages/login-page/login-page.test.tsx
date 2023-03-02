import {screen, render} from '@testing-library/react'

import {LoginPage} from './login-page'

test('it should render the login title', () => {
  render(<LoginPage />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})
