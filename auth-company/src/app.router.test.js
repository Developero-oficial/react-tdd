import React from 'react'
import {screen} from '@testing-library/react'

import {renderWithRouter} from './utils/tests'
import {AppRouter} from './app-router'

describe('when the user is not authenticated and enters on admin page', () => {
  it('must be redirected to login page', () => {
    renderWithRouter(<AppRouter />, {route: '/admin'})

    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})

describe('when the user is not authenticated and enters on employee page', () => {
  it('must be redirected to login page', () => {
    renderWithRouter(<AppRouter />, {route: '/employee'})

    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})

describe('when the user is authenticated and enters on admin page', () => {
  it('must be redirected to login page', () => {
    renderWithRouter(<AppRouter isAuth />, {route: '/admin'})

    expect(screen.getByText(/admin page/i)).toBeInTheDocument()
  })
})
