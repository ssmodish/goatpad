import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from './postFormSchema'

import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '../../../config/firebase.ts'

import { Stack } from '../../../components/styles/Stack.styled'

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      postBody: '',
    },
    resolver: yupResolver(postFormSchema),
  })

  const { currentUser } = auth

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...data,
        topics: [currentUser.displayName || currentUser.email],
        uid: currentUser.uid,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Stack gutter='lg'>
        <Stack gutter='sm'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' {...register('title')} placeholder='Enter a title' />
          <p>{errors.title?.message}</p>
        </Stack>
        <Stack gutter='sm'>
          <label htmlFor='postBody'>Body</label>
          <textarea name='postBody' {...register('postBody')} placeholder='Enter your post' rows='6' />
          <p>{errors.postBody?.message}</p>
        </Stack>
        <button type='submit'>Submit</button>
      </Stack>
    </form>
  )
}

export default PostForm
