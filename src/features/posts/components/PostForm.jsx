import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from './postFormSchema'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../config/firebase.ts'

import { useSelector } from 'react-redux'

import { useCollection } from '../../../hooks/useCollection'
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

  const user = useSelector((state) => state.auth.currentUser)
  const navigate = useNavigate()

  const onSubmit = async (data, e) => {
    try {
      const newTopics = data.topics
        .split(',')
        .map((topic) => topic.trim().toLowerCase())
      const allTopics = [user.displayName || user.email, ...newTopics]
      const colRef = collection(db, 'posts')
      const docRef = await addDoc(colRef, {
        ...data,
        topics: [...allTopics],
        uid: user.uid,
        timestamp: serverTimestamp(),
      })
      console.log('Document written with ID: ', docRef.id)

      const { topics } = await useCollection('topics')

      console.log(topics)

      // const topicRef = await addDoc(collection(db, 'topics'), {
      //   ...data,
      //   allTopics: { ...topics, ...newTopics },
      // })

      e.target.reset()
    } catch (err) {
      console.error('Error adding document: ', err)
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
