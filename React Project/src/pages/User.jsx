import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {userId}=useParams();
  return (
    <div>
      <h2>User:{userId}</h2>
    </div>
  )
}

export default User
