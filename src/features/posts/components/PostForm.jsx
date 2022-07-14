import React from 'react'

import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from './postFormSchema'

import { addDocument } from '../../../utils/firestoreService'

import styled from 'styled-components'
import { Stack } from '../../../components/styles/Stack.styled'

const PostFormContainer = styled.div`
  padding: 30px;
  border-left: 1px solid #ddd;
  width: 100%;

  @media screen and (max-width: 1200px) {
    padding-left: 15px;
  }
`

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      postBody: '',
      topics: [],
    },
    resolver: yupResolver(postFormSchema),
  })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    try {
      addDocument('posts', data)
    } catch (error) {
      console.log(error)
    }
    navigate('/')
  }

  return (
    <PostFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gutter="lg">
          <Stack gutter="sm">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              {...register('title')}
              placeholder="Enter a title"
            />
            <p>{errors.title?.message}</p>
          </Stack>
          <Stack gutter="sm">
            <label htmlFor="title">Topics</label>
            <input
              type="text"
              name="topics"
              {...register('topics')}
              placeholder="Enter topics separated by commas"
            />
            <p>{errors.title?.message}</p>
          </Stack>
          <Stack gutter="sm">
            <label htmlFor="postBody">Body</label>
            <textarea
              name="postBody"
              {...register('postBody')}
              placeholder="Enter your post"
              rows="6"
            />
            <p>{errors.postBody?.message}</p>
          </Stack>
          <button type="submit">Submit</button>
        </Stack>
      </form>
    </PostFormContainer>
  )
}

export default PostForm
