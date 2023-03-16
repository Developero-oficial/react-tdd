import React from 'react'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'

import {renderWithProviders} from 'mocks/render-with-providers'
import {server} from 'mocks/server'
import {LoginPage} from './login-page'

const getSubmitBtn = () => screen.getByRole('button', {name: /submit/i})

const mockServerWithError = () =>
  server.use(
    rest.post('/login', (req, res, ctx) => res(ctx.delay(1), ctx.status(500))),
  )

const fillAndSendLoginForm = async () => {
  await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@mail.com')
  await userEvent.type(screen.getByLabelText(/password/i), '123456')

  await userEvent.click(getSubmitBtn())
}

test('it should render the login title', () => {
  renderWithProviders(<LoginPage />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})

test('it should render the form elements', () => {
  renderWithProviders(<LoginPage />)

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(getSubmitBtn()).toBeInTheDocument()
})

test('it should validate the inputs as required', async () => {
  renderWithProviders(<LoginPage />)

  await userEvent.click(getSubmitBtn())

  expect(await screen.findByText(/The email is required/i)).toBeInTheDocument()
  expect(
    await screen.findByText(/The password is required/i),
  ).toBeInTheDocument()
})

test('it should validate the email format', async () => {
  renderWithProviders(<LoginPage />)

  await userEvent.type(screen.getByLabelText(/email/i), 'invalid email')

  await userEvent.click(getSubmitBtn())

  expect(await screen.findByText(/The email is not valid/i)).toBeInTheDocument()
})

test('it should disable the submit button while is fetching', async () => {
  renderWithProviders(<LoginPage />)

  expect(getSubmitBtn()).not.toBeDisabled()

  await fillAndSendLoginForm()

  await waitFor(() => expect(getSubmitBtn()).toBeDisabled())
})

test('it should show a loading indicator while is fetching the login', async () => {
  renderWithProviders(<LoginPage />)

  expect(
    screen.queryByRole('progressbar', {name: /loading/i}),
  ).not.toBeInTheDocument()

  await fillAndSendLoginForm()

  expect(await screen.findByRole('progressbar', {name: /loading/i}))
})

test('it should display "Unexpected error, please try again" when there is an error from the api login', async () => {
  mockServerWithError()

  renderWithProviders(<LoginPage />)

  await fillAndSendLoginForm()

  expect(
    await screen.findByText('Unexpected error, please try again'),
  ).toBeInTheDocument()
})
