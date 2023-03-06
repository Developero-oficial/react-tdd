import * as yup from 'yup'

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('The email is required')
      .email('The email is not valid'),
    password: yup.string().required('The password is required'),
  })
  .required()
