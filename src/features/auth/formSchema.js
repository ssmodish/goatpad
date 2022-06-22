import * as yup from 'yup'

export const signUpSchema = yup.object({
  displayName: yup
    .string()
    .trim()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters long'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(64),
  password2: yup
    .string()
    .required('Confirmation Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const loginSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
})
