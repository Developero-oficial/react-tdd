import React from 'react'
import {screen, render} from '@testing-library/react'

import {LoginPage} from './login-page'

describe('when login page is mounted', () => {
  it('must display the login title', () => {
    render(<LoginPage />)
    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})
