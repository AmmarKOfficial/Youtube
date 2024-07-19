import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../../firebase"

const AuthCheck = () => {
    const [authUser, setAuthUser] = useState(null)
  return (
    <div>AuthCheck</div>
  )
}

export default AuthCheck