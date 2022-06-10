import * as yup from 'yup'

export const postFormSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required('A title is required')
    .min(4, 'The title must be at least 4 characters long'),
  postBody: yup
    .string()
    .trim()
    .required('Please add to the conversation')
    .min(10, "Ten letters is all we're asking"),
})
