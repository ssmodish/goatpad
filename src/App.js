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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Posts />} />
        {/* <Route path='/:postId' element={<Posts />} /> */}

        <Route path='/topic/:topic' element={<FilteredPosts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
