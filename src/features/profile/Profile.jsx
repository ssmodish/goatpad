import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.auth.user)

  return (
    <div>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

export default Profile
