import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from '@testing-library/react'

import {AuthGuard} from './components/auth-guard'

export const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: Router})
}

export const renderWithAuthProvider = (ui, {isAuth = false} = {}) => {
  return render(<AuthGuard isAuth={isAuth}>{ui}</AuthGuard>, {
    wrapper: Router,
  })
}

export const goTo = route => window.history.pushState({}, 'Test page', route)

export default {
  renderWithRouter,
  renderWithAuthProvider,
  goTo,
}
