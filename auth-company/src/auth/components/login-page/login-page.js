import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const passwordValidationsMsg =
  'The password must contain at least 8 characters, one upper case letter, one number and one special character'

const validateEmail = email => {
  const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

  return regex.test(email)
}

const validatePassword = password => {
  const passwordRulesRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

  return passwordRulesRegex.test(password)
}

export const LoginPage = () => {
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('')
  const [formValues, setFormValues] = useState({email: '', password: ''})

  const handleSubmit = e => {
    e.preventDefault()
    const {email, password} = e.target.elements

    if (!email.value) {
      setEmailValidationMessage('The email is required')
    }

    if (!password.value) {
      setPasswordValidationMessage('The password is required')
    }
  }

  const handleChange = ({target: {value, name}}) => {
    setFormValues({...formValues, [name]: value})
  }

  const handleBlurEmail = () => {
    if (!validateEmail(formValues.email)) {
      setEmailValidationMessage(
        'The email is invalid. Example: john.doe@mail.com"',
      )
      return
    }

    setEmailValidationMessage('')
  }

  const handleBlurPassword = () => {
    if (!validatePassword(formValues.password)) {
      setPasswordValidationMessage(passwordValidationsMsg)
      return
    }

    setPasswordValidationMessage('')
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="email"
          id="email"
          name="email"
          helperText={emailValidationMessage}
          onChange={handleChange}
          onBlur={handleBlurEmail}
          value={formValues.email}
        />
        <TextField
          label="password"
          id="password"
          type="password"
          name="password"
          helperText={passwordValidationMessage}
          onChange={handleChange}
          onBlur={handleBlurPassword}
          value={formValues.password}
        />
        <Button type="submit">Send</Button>
      </form>
    </>
  )
}

export default {LoginPage}
