import React from 'react'
import {render, screen} from '@testing-library/react'

import {EmployeePage} from './employee-page'
import {AuthContext} from '../../../utils/contexts/auth-context'

describe('when the admin access to employee page', () => {
  it('must have access to delete the employee button', () => {
    render(
      <AuthContext.Provider
        value={{user: {username: 'John Doe', role: 'admin'}}}
      >
        <EmployeePage />
      </AuthContext.Provider>,
    )

    expect(screen.getByRole('button', {name: /delete/i})).toBeInTheDocument()
  })
})

describe('when the employee access to employee page', () => {
  it('must not have access to delete the employee button', () => {
    render(
      <AuthContext.Provider
        value={{user: {username: 'John Doe', role: 'employee'}}}
      >
        <EmployeePage />
      </AuthContext.Provider>,
    )

    expect(
      screen.queryByRole('button', {name: /delete/i}),
    ).not.toBeInTheDocument()
  })
})
