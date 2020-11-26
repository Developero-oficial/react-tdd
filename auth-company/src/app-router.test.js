import React from 'react'
import {screen, fireEvent} from '@testing-library/react'
import {setupServer} from 'msw/node'

import {renderWithAuthProvider, goTo} from './utils/tests'
import {handlers} from './mocks/handlers'
import {AppRouter} from './app-router'

const fillInputs = ({
  email = 'john.doe@test.com',
  password = 'Aa123456789!@#',
} = {}) => {
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: {value: email},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: password},
  })
}

const getSendButton = () => screen.getByRole('button', {name: /send/i})

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('when the user is not authenticated and enters on admin page', () => {
  it('must be redirected to login page', () => {
    goTo('/admin')
    renderWithAuthProvider(<AppRouter />)

    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})

describe('when the user is not authenticated and enters on employee page', () => {
  it('must be redirected to login page', () => {
    goTo('/employee')
    renderWithAuthProvider(<AppRouter />)

    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})

describe('when the user is authenticated and enters on admin page', () => {
  it('must be redirected to login page', () => {
    goTo('/admin')
    renderWithAuthProvider(<AppRouter />, {isAuth: true})

    expect(screen.getByText(/admin page/i)).toBeInTheDocument()
  })
})

describe('when the admin is authenticated in login page', () => {
  it('must be redirected to admin page', async () => {
    renderWithAuthProvider(<AppRouter />)

    fillInputs({email: 'admin@mail.com'})

    fireEvent.click(getSendButton())

    expect(await screen.findByText(/admin page/i)).toBeInTheDocument()
  })
})
