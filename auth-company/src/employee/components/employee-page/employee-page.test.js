import React from 'react'
import {render, screen} from '@testing-library/react'

import {EmployeePage} from './employee-page'
import {AuthContext} from '../../../utils/contexts/auth-context'
import {ADMIN_ROLE, EMPLOYEE_ROLE} from '../../../consts'

const renderWith = ({role, username = 'John Doe'}) =>
  render(
    <AuthContext.Provider value={{user: {username, role}}}>
      <EmployeePage />
    </AuthContext.Provider>,
  )

describe('when the admin access to employee page', () => {
  it('must have access to delete the employee button', () => {
    renderWith({role: ADMIN_ROLE})

    expect(screen.getByRole('button', {name: /delete/i})).toBeInTheDocument()
  })
})

describe('when the employee access to employee page', () => {
  it('must not have access to delete the employee button', () => {
    renderWith({role: EMPLOYEE_ROLE})

    expect(
      screen.queryByRole('button', {name: /delete/i}),
    ).not.toBeInTheDocument()
  })
})
