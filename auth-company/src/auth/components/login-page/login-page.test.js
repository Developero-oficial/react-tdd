import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'

import {LoginPage} from './login-page'

const passwordValidationMessage =
  'The password must contain at least 8 characters, one upper case letter, one number and one special character'

const getPasswordInput = () => screen.getByLabelText(/password/i)

beforeEach(() => render(<LoginPage />))

describe('when login page is mounted', () => {
  it('must display the login title', () => {
    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })

  it('must have a form with the following fields: email, password and a submit button', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /send/i}))
  })
})

describe('when the user leaves empty fields and clicks the submit button', () => {
  it('display required messages as the format: "The [field name] is required"', () => {
    expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(/the password is required/i),
    ).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', {name: /send/i}))

    expect(screen.getByText(/the email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/the password is required/i)).toBeInTheDocument()
  })
})

describe('when the user fills the fields and clicks the submit button', () => {
  it('must not display the required messages', () => {
    screen.getByLabelText(/email/i).value = 'john.doe@test.com'
    screen.getByLabelText(/password/i).value = 'Aa123456789!@#'

    fireEvent.click(screen.getByRole('button', {name: /send/i}))

    expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(/the password is required/i),
    ).not.toBeInTheDocument()
  })
})

describe('when the user fills and blur the email input with invalid email, and then focus and change with valid value', () => {
  it('must not display a validation message', () => {
    const emailInput = screen.getByLabelText(/email/i)

    fireEvent.change(emailInput, {
      target: {value: 'invalid.email'},
    })
    fireEvent.blur(emailInput)

    expect(
      screen.getByText(/the email is invalid. Example: john.doe@mail.com"/i),
    ).toBeInTheDocument()

    fireEvent.change(emailInput, {
      target: {value: 'john.doe@email.com'},
    })
    fireEvent.blur(emailInput)

    expect(
      screen.queryByText(/the email is invalid. Example: john.doe@mail.com"/i),
    ).not.toBeInTheDocument()
  })
})

describe('when the user fills and blur the password input with a value with 7 character length', () => {
  it(`must display the validation message "The password must contain at least 8 characters,
  one upper case letter, one number and one special character"`, () => {
    const passwordSevenLengthVal = 'asdfghj'

    fireEvent.change(getPasswordInput(), {
      target: {value: passwordSevenLengthVal},
    })
    fireEvent.blur(getPasswordInput())

    expect(screen.getByText(passwordValidationMessage)).toBeInTheDocument()
  })
})

describe('when the user fills and blur the password input with a value without one upper case character', () => {
  it(`must display the validation message "The password must contain at least 8 characters,
  one upper case letter, one number and one special character"`, () => {
    const passwordWithoutUpperCaseVal = 'asdfghj8'

    fireEvent.change(getPasswordInput(), {
      target: {value: passwordWithoutUpperCaseVal},
    })
    fireEvent.blur(getPasswordInput())

    expect(screen.getByText(passwordValidationMessage)).toBeInTheDocument()
  })
})

describe('when the user fills and blur the password input with a value without one number', () => {
  it(`must display the validation message "The password must contain at least 8 characters,
  one upper case letter, one number and one special character"`, () => {
    const passwordWithoutNumb = 'asdfghjA'

    fireEvent.change(getPasswordInput(), {
      target: {value: passwordWithoutNumb},
    })
    fireEvent.blur(getPasswordInput())

    expect(screen.getByText(passwordValidationMessage)).toBeInTheDocument()
  })
})

describe('when the user fills and blur the password input with a value without one special character', () => {
  it(`must display the validation message "The password must contain at least 8 characters,
  one upper case letter, one number and one special character"`, () => {
    const passwordWithoutSpecialChar = 'asdfghjA1a'

    fireEvent.change(getPasswordInput(), {
      target: {value: passwordWithoutSpecialChar},
    })
    fireEvent.blur(getPasswordInput())

    expect(screen.getByText(passwordValidationMessage)).toBeInTheDocument()
  })
})
