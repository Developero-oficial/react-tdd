import {screen} from '@testing-library/react'

import {renderWithProviders} from 'mocks/render-with-providers'
import App from './app'

test('it should render the login page', () => {
  renderWithProviders(<App />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})
