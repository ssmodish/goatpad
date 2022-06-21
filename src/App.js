import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './features/auth/authSlice'
import { auth, onAuthStateChanged } from './config/firebase.ts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Posts from './features/posts'
// import FilteredPosts from './features/posts/components/FilteredPosts'
import About from './features/about/About'
import Profile from './features/profile/Profile'
import Layout from './components/Layout'
import Topics from './components/Topics'
import PostForm from './features/posts/components/PostForm'

function App() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photourl,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Layout>
      <Navbar />
      <Topics />

      <Routes>
        <Route path="/" element={<Posts />} />
        {/* <Route path='/:postId' element={<Posts />} /> */}

        <Route path="/topic/:topic" element={<Posts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {user ? <PostForm /> : <div>Need a User</div>}
      <Footer />
    </Layout>
  )
}

export default App
