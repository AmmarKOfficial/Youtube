import { useEffect, useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "./firebase"

function App() {

  const [AuthUser, setAuthUser] = useState(null)

  useEffect(()=>{
    const listen = onAuthStateChanged(auth, (user) => {
      if(user){
        setAuthUser(user);
        console.log("User is Login With ", user.uid, " And Email Is ", user.email);
      }else{
        setAuthUser(null)
      }
    })
  })

  return (
    <>
      {
        AuthUser ? (<Home/>) : (<Auth/>)
      }  
    </>
  )
}

export default App
