import {screen, render} from '@testing-library/react'

import App from './app'

test('it should render the login page', () => {
  render(<App />)

  expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument()
})
