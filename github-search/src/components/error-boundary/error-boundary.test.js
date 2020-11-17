import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'

import {ErrorBoundary} from './error-boundary'

jest.spyOn(console, 'error')

const ThrowError = () => {
  throw new Error('ups')
}

describe('when the component works without errors', () => {
  it('must render the component content', () => {
    render(
      <ErrorBoundary>
        <h1>test pass</h1>
      </ErrorBoundary>,
    )

    expect(screen.getByText(/test pass/i)).toBeInTheDocument()
  })
})

describe('when the component throws an error', () => {
  it('must render the message "There is an unexpected error" and a reload button', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    )

    expect(
      screen.getByText(/there is an unexpected error/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /reload/i})).toBeInTheDocument()
  })
})

describe('when the user clicks on reload button', () => {
  it('must reload the app', () => {
    delete window.location
    window.location = {reload: jest.fn()}

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    )

    fireEvent.click(screen.getByRole('button', {name: /reload/i}))

    expect(window.location.reload).toHaveBeenCalledTimes(1)
  })
})
