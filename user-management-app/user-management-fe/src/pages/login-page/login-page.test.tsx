import {screen, render, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {LoginPage} from './login-page'

const getSubmitBtn = () => screen.getByRole('button', {name: /submit/i})

test('it should render the login title', () => {
  render(<LoginPage />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})

test('it should render the form elements', () => {
  render(<LoginPage />)

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(getSubmitBtn()).toBeInTheDocument()
})

test('it should validate the inputs as required', async () => {
  render(<LoginPage />)

  await userEvent.click(getSubmitBtn())

  expect(await screen.findByText(/The email is required/i)).toBeInTheDocument()
  expect(
    await screen.findByText(/The password is required/i),
  ).toBeInTheDocument()
})

test('it should validate the email format', async () => {
  render(<LoginPage />)

  await userEvent.type(screen.getByLabelText(/email/i), 'invalid email')

  await userEvent.click(getSubmitBtn())

  expect(await screen.findByText(/The email is not valid/i)).toBeInTheDocument()
})

test('it should disable the submit button while is fetching', async () => {
  render(<LoginPage />)

  expect(getSubmitBtn()).not.toBeDisabled()

  await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@mail.com')
  await userEvent.type(screen.getByLabelText(/password/i), '123456')

  await userEvent.click(getSubmitBtn())

  await waitFor(() => expect(getSubmitBtn()).toBeDisabled())
})
