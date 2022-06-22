import React from 'react'
import { Routes, Route } from 'react-router-dom'
// eslint-disable-next-line
import firebaseApp from './config/firebase.ts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Posts from './features/posts'
import FilteredPosts from './features/posts/components/FilteredPosts'
import About from './features/about/About'
import Profile from './features/profile/Profile'
import Layout from './components/Layout'
import Topics from './components/Topics'
import PostForm from './features/posts/components/PostForm'

// import { useAuthContext } from './hooks/useAuthContext'
import { useSelector } from 'react-redux'

function App() {
  const { authenticated } = useSelector((state) => state.auth)

  return (
    <Layout>
      <Navbar />
      <Topics />

      <Routes>
        <Route path="/" element={<Posts />} />
        {/* <Route path='/:postId' element={<Posts />} /> */}

        <Route path="/topic/:topic" element={<FilteredPosts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {authenticated ? <PostForm /> : <div>Need a User</div>}
      <Footer />
    </Layout>
  )
}

export default App
