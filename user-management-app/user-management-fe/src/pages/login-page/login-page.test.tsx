import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {LoginPage} from './login-page'

test('it should render the login title', () => {
  render(<LoginPage />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})

test('it should render the form elements', () => {
  render(<LoginPage />)

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
})

test('it should validate the inputs as required', () => {
  render(<LoginPage />)

  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(screen.getByText(/The email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/The password is required/i)).toBeInTheDocument()
})
